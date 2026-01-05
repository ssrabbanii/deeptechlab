import type { Venture } from "@shared/schema";

const VENTURES_CSV_URL = "/ventures-data.csv";

type CsvRow = Record<string, string>;

function parseCsv(text: string): CsvRow[] {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentField = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Escaped quote
                currentField += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === "," && !inQuotes) {
            currentRow.push(currentField);
            currentField = "";
        } else if ((char === "\n" || char === "\r") && !inQuotes) {
            if (currentField !== "" || currentRow.length > 0) {
                currentRow.push(currentField);
                rows.push(currentRow);
                currentRow = [];
                currentField = "";
            }
        } else {
            currentField += char;
        }
    }

    if (currentField !== "" || currentRow.length > 0) {
        currentRow.push(currentField);
        rows.push(currentRow);
    }

    if (rows.length === 0) return [];

    const headers = rows[0].map((h) => h.trim());
    return rows.slice(1).map((cols) => {
        const row: CsvRow = {};
        headers.forEach((header, index) => {
            row[header] = (cols[index] || "").trim();
        });
        return row;
    });
}

function slugify(name: string): string {
    return name
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export async function fetchVenturesFromCsv(): Promise<Venture[]> {
    const res = await fetch(VENTURES_CSV_URL);
    if (!res.ok) {
        throw new Error("Failed to load ventures data");
    }
    const text = await res.text();
    const rows = parseCsv(text);

    const ventures: Venture[] = rows
        .map((row, index) => {
            const name = row["Venture Name"]?.trim();
            if (!name) return null;

            const stakeholdersRaw = row["Seeking Stakeholders"] || "";
            const seekingStakeholders = stakeholdersRaw
                ? stakeholdersRaw
                    .split(",")
                    .map((s) => s.trim().toLowerCase())
                    .filter(Boolean)
                : [];

            const venture: Venture = {
                id: index + 1,
                name,
                slug: slugify(name),
                website: row["Website"] || "Not available",
                cohort: row["HKDTL Cohort"] || "Not specified",
                universityKTO: row["University KTO"] || "Not specified",
                valueProposition: row["Venture Value Proposition"] || "",
                techIP: row["Tech IP"] || "",
                foundersBackground: row["Founders Background"] || "",
                seekingStakeholders,
                whyNow: row["Why Now"] || "",
                createdAt: new Date(),
            };

            return venture;
        })
        .filter((v): v is Venture => v !== null);

    return ventures;
}

export async function fetchVentureBySlug(slug: string): Promise<Venture | null> {
    const ventures = await fetchVenturesFromCsv();
    return ventures.find((v) => v.slug === slug) || null;
}

// Prefer server API when available (for admin-added ventures), fall back to CSV for static deploys
export async function fetchVenturesWithApiFallback(): Promise<Venture[]> {
    try {
        const res = await fetch("/api/ventures", { credentials: "include" });
        if (res.ok) {
            return await res.json();
        }
    } catch {
        // ignore network/API errors and fall back to CSV
    }
    return fetchVenturesFromCsv();
}

export async function fetchVentureBySlugWithApiFallback(
    slug: string,
): Promise<Venture | null> {
    try {
        const res = await fetch(`/api/ventures/${slug}`, { credentials: "include" });
        if (res.ok) {
            return await res.json();
        }
    } catch {
        // ignore and fall back
    }
    return fetchVentureBySlug(slug);
}




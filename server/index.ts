import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { storage } from "./storage";
import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
import path from "path";

// Initialize venture data from CSV
async function initializeSampleData() {
  const existingVentures = await storage.getAllVentures();
  if (existingVentures.length === 0) {
    try {
      const csvPath = path.join(process.cwd(), "ventures-data.csv");
      const fileContent = readFileSync(csvPath, "utf-8");
      const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
      });

      let count = 0;
      for (const record of records as any[]) {
        const slug = record["Venture Name"]
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");

        const seekingStakeholders = record["Seeking Stakeholders"]
          ? record["Seeking Stakeholders"].split(",").map((s: string) => s.trim())
          : [];

        await storage.createVenture({
          name: record["Venture Name"],
          slug: slug,
          website: record["Website"],
          cohort: record["HKDTL Cohort"],
          universityKTO: record["University KTO"],
          valueProposition: record["Venture Value Proposition"],
          techIP: record["Tech IP"],
          foundersBackground: record["Founders Background"],
          seekingStakeholders: seekingStakeholders,
          whyNow: record["Why Now"],
        });
        count++;
      }
      log(`Initialized ${count} ventures from CSV file`);
    } catch (error) {
      log(`Error initializing ventures from CSV: ${error}`);
    }
  }
}

const app = express();

// Security headers to prevent browser warnings
app.use((req, res, next) => {
  // Prevent clickjacking attacks
  res.setHeader('X-Frame-Options', 'DENY');

  // Prevent MIME type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');

  // Referrer policy
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Content Security Policy - Development-friendly configuration
  if (process.env.NODE_ENV !== "production") {
    // More permissive CSP for development (Vite needs inline scripts)
    res.setHeader('Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://kit.fontawesome.com https://ka-f.fontawesome.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://replit.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://ka-f.fontawesome.com https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://ka-f.fontawesome.com https://cdnjs.cloudflare.com; " +
      "img-src 'self' data: https: blob: https://www.google-analytics.com https://ssl.google-analytics.com; " +
      "connect-src 'self' https: wss: ws: https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net; " +
      "frame-src 'self' https://www.google.com; " +
      "object-src 'none'; " +
      "base-uri 'self';"
    );
  } else {
    // Strict CSP for production (external scripts only)
    res.setHeader('Content-Security-Policy',
      "default-src 'self'; " +
      "script-src 'self' https://kit.fontawesome.com https://ka-f.fontawesome.com https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://ka-f.fontawesome.com https://cdnjs.cloudflare.com; " +
      "font-src 'self' https://fonts.gstatic.com https://ka-f.fontawesome.com https://cdnjs.cloudflare.com; " +
      "img-src 'self' data: https: blob: https://www.google-analytics.com https://ssl.google-analytics.com; " +
      "connect-src 'self' https: wss: ws: https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net; " +
      "frame-src 'self' https://www.google.com; " +
      "object-src 'none'; " +
      "base-uri 'self';"
    );
  }

  // Permissions policy
  res.setHeader('Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), payment=()'
  );

  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  // Initialize sample data
  await initializeSampleData();

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  const isDevelopment = process.env.NODE_ENV !== "production";
  if (isDevelopment) {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Serve the app on port 3000 (changed from 5000 to avoid macOS AirPlay conflict)
  // this serves both the API and the client.
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();

import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { 
  insertApplicationSchema, 
  insertContactSchema,
  insertNominationSchema,
  insertVentureSchema,
  type InsertVenture
} from "../shared/schema";
import { parse } from "csv-parse/sync";

// Helper function to generate slug from venture name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure multer for file uploads
  const upload = multer({
    dest: 'uploads/',
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: (req, file, cb) => {
      // Accept PDF and Word documents
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only PDF and Word documents are allowed.'));
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Submit application with file upload
  app.post("/api/applications", 
    upload.single('resume'),
    async (req: Request, res: Response) => {
      try {
        // Parse and validate the application data
        const applicationData = insertApplicationSchema.parse(req.body);
        
        // Get uploaded file information
        const resumeFilename = req.file ? req.file.filename : null;
        
        // Add the application to storage
        const application = await storage.createApplication({
          ...applicationData,
          resumeFilename
        });
        
        res.status(201).json({ 
          message: "Application submitted successfully",
          applicationId: application.id
        });
      } catch (error) {
        console.error("Error submitting application:", error);
        res.status(400).json({ 
          message: error instanceof Error ? error.message : "Invalid application data"
        });
      }
    }
  );

  // Submit contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        message: "Contact form submitted successfully",
        contactId: contact.id
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid contact data"
      });
    }
  });

  // Submit nomination form
  app.post("/api/nominate", async (req: Request, res: Response) => {
    try {
      const nominationData = insertNominationSchema.parse(req.body);
      const nomination = await storage.createNomination(nominationData);
      
      res.status(201).json({ 
        message: "Nomination submitted successfully",
        nominationId: nomination.id
      });
    } catch (error) {
      console.error("Error submitting nomination:", error);
      res.status(400).json({ 
        message: error instanceof Error ? error.message : "Invalid nomination data"
      });
    }
  });

  // Serve syllabus PDF for download
  app.get("/api/syllabus", (req: Request, res: Response) => {
    try {
      const syllabusPath = path.resolve(process.cwd(), "server", "syllabus.pdf");
      const pdfBuffer = fs.readFileSync(syllabusPath);
      
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="HK-DeepTech-Lab-Syllabus-2025.pdf"');
      res.setHeader("Content-Length", pdfBuffer.length.toString());
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error serving PDF for download:", error);
      res.status(404).json({ error: "Syllabus not found" });
    }
  });

  // Serve PDF directly at the expected URL for inline viewing
  app.get("/files/syllabus.pdf", (req: Request, res: Response) => {
    try {
      const syllabusPath = path.resolve(process.cwd(), "server", "syllabus.pdf");
      const pdfBuffer = fs.readFileSync(syllabusPath);
      
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'inline; filename="HK-DeepTech-Lab-Syllabus-2025.pdf"');
      res.setHeader("Content-Length", pdfBuffer.length.toString());
      res.send(pdfBuffer);
    } catch (error) {
      console.error("Error serving PDF:", error);
      res.status(404).json({ error: "Syllabus not found" });
    }
  });

  // Ventures routes
  // Get all ventures
  app.get("/api/ventures", async (req: Request, res: Response) => {
    try {
      const ventures = await storage.getAllVentures();
      res.status(200).json(ventures);
    } catch (error) {
      console.error("Error fetching ventures:", error);
      res.status(500).json({ message: "Failed to fetch ventures" });
    }
  });

  // Get venture by slug
  app.get("/api/ventures/:slug", async (req: Request, res: Response) => {
    try {
      const { slug } = req.params;
      const venture = await storage.getVentureBySlug(slug);
      
      if (!venture) {
        return res.status(404).json({ message: "Venture not found" });
      }
      
      res.status(200).json(venture);
    } catch (error) {
      console.error("Error fetching venture:", error);
      res.status(500).json({ message: "Failed to fetch venture" });
    }
  });

  // Upload ventures from CSV file
  const csvUpload = multer({
    dest: 'uploads/',
    limits: {
      fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['text/csv'];
      
      if (allowedTypes.includes(file.mimetype) || file.originalname.endsWith('.csv')) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only CSV files are allowed.'));
      }
    }
  });

  app.post("/api/ventures/upload", 
    csvUpload.single('file'),
    async (req: Request, res: Response) => {
      try {
        if (!req.file) {
          return res.status(400).send("No file uploaded");
        }

        const fileContent = fs.readFileSync(req.file.path, 'utf-8');
        
        const records = parse(fileContent, {
          columns: true,
          skip_empty_lines: true,
          trim: true
        });

        const ventures: InsertVenture[] = [];
        const errors: string[] = [];
        
        for (let i = 0; i < (records as any[]).length; i++) {
          const record = (records as any[])[i];
          
          try {
            const seekingStakeholders = record['Seeking Stakeholders']
              ? record['Seeking Stakeholders'].split(',').map((s: string) => s.trim().toLowerCase())
              : [];

            const ventureData = {
              name: record['Venture Name'],
              slug: generateSlug(record['Venture Name']),
              website: record['Website'],
              cohort: record['HKDTL Cohort'],
              universityKTO: record['University KTO'],
              valueProposition: record['Venture Value Proposition'],
              techIP: record['Tech IP'],
              foundersBackground: record['Founders Background'],
              seekingStakeholders,
              whyNow: record['Why Now']
            };

            // Validate the venture data
            const validatedVenture = insertVentureSchema.parse(ventureData);
            ventures.push(validatedVenture);
          } catch (error) {
            errors.push(`Row ${i + 1}: ${error instanceof Error ? error.message : 'Invalid data'}`);
          }
        }

        if (errors.length > 0) {
          // Clean up uploaded file
          fs.unlinkSync(req.file.path);
          return res.status(400).send(`Validation errors:\n${errors.join('\n')}`);
        }

        const createdVentures = await storage.createVentures(ventures);
        
        // Clean up uploaded file
        fs.unlinkSync(req.file.path);

        res.status(201).json({
          message: "Ventures uploaded successfully",
          count: createdVentures.length
        });
      } catch (error) {
        console.error("Error uploading ventures:", error);
        res.status(400).send(error instanceof Error ? error.message : "Error processing file");
      }
    }
  );

  // Security and SEO files
  app.get("/robots.txt", (req: Request, res: Response) => {
    res.type("text/plain");
    res.send(`User-agent: *
Allow: /

# Sitemap
Sitemap: https://hkdeeptechlab.io/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin paths (if any)
Disallow: /admin/
Disallow: /api/

# Allow important pages
Allow: /apply
Allow: /contact
Allow: /files/syllabus.pdf`);
  });

  app.get("/.well-known/security.txt", (req: Request, res: Response) => {
    res.type("text/plain");
    res.send(`Contact: security@hkdeeptechlab.io
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://hkdeeptechlab.io/.well-known/security.txt`);
  });

  app.get("/sitemap.xml", (req: Request, res: Response) => {
    res.type("application/xml");
    res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hkdeeptechlab.io/</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/about</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/for-participants</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/for-partners</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/faculty</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/schedule</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/apply</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/faq</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/contact</loc>
    <lastmod>2025-06-13</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>`);
  });

  const httpServer = createServer(app);
  return httpServer;
}
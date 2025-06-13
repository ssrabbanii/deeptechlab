import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import multer from "multer";
import path from "path";
import fs from "fs";
import { 
  insertApplicationSchema, 
  insertContactSchema,
  insertNominationSchema
} from "@shared/schema";

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      // Create uploads directory if it doesn't exist
      const uploadDir = path.join(process.cwd(), "uploads");
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      // Create unique filename
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  }),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Only allow PDFs and DOC/DOCX files
    const allowedMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and Word documents are allowed.') as any);
    }
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok" });
  });

  // Submit application form
  app.post(
    "/api/apply", 
    upload.single('resume'), 
    async (req: Request, res: Response) => {
      try {
        // Validate the request body
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
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Add the contact to storage
      const contact = await storage.createContact(contactData);
      
      res.status(201).json({ 
        message: "Message sent successfully",
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
      // Validate the request body
      const nominationData = insertNominationSchema.parse(req.body);
      
      // Add the nomination to storage
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

  // Serve syllabus PDF
  app.get("/api/syllabus", (req: Request, res: Response) => {
    // Create PDF content based on the provided syllabus
    const pdfContent = `%PDF-1.4
1 0 obj
<<
/Type /Catalog
/Pages 2 0 R
>>
endobj

2 0 obj
<<
/Type /Pages
/Kids [3 0 R]
/Count 1
>>
endobj

3 0 obj
<<
/Type /Page
/Parent 2 0 R
/MediaBox [0 0 612 792]
/Contents 4 0 R
/Resources <<
/Font <<
/F1 5 0 R
>>
>>
>>
endobj

4 0 obj
<<
/Length 800
>>
stream
BT
/F1 16 Tf
50 720 Td
(Hong Kong Deep-Tech Lab Business Executives Program) Tj
0 -30 Td
/F1 14 Tf
(Course Syllabus Overview) Tj
0 -20 Td
(Scientists Track & Business Leaders Track) Tj
0 -40 Td
/F1 12 Tf
(Week 1: Deep Tech Ventures and Ecosystems) Tj
0 -15 Td
(- Understand the deep tech landscape) Tj
0 -15 Td
(- Key stakeholders and their roles in the ecosystem) Tj
0 -30 Td
(Week 2: Business Models and Commercialization Strategies) Tj
0 -15 Td
(- Business models options for deep tech ventures) Tj
0 -15 Td
(- Navigate the commercialization process) Tj
0 -15 Td
(- Develop GTM strategies and execution road map) Tj
0 -30 Td
(Week 3: Fundraising and Scaling Deep Tech Ventures) Tj
0 -15 Td
(- Understand the fundraising landscape) Tj
0 -15 Td
(- Pitch effectively to investors) Tj
0 -15 Td
(- Develop strategies for scaling ventures) Tj
0 -30 Td
(Week 4: Leadership and Team Dynamics) Tj
0 -15 Td
(- Build effective teams) Tj
0 -15 Td
(- Develop leadership strategy for high uncertainties) Tj
0 -15 Td
(- Lead deep-tech ventures to success) Tj
ET
endstream
endobj

5 0 obj
<<
/Type /Font
/Subtype /Type1
/BaseFont /Helvetica
>>
endobj

xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000274 00000 n 
0000001126 00000 n 
trailer
<<
/Size 6
/Root 1 0 R
>>
startxref
1185
%%EOF`;

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="HK-DeepTech-Lab-Syllabus-2025.pdf"');
    res.send(Buffer.from(pdfContent));
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
Allow: /about
Allow: /contact
Allow: /faculty
Allow: /schedule
Allow: /faq
Allow: /for-participants
Allow: /for-partners`);
  });

  app.get("/.well-known/security.txt", (req: Request, res: Response) => {
    res.type("text/plain");
    res.send(`Contact: mailto:2025cohort@hkdeeptechlab.io
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
    <lastmod>2024-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/apply</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/about</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/contact</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/faculty</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/schedule</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/faq</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/for-participants</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://hkdeeptechlab.io/for-partners</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`);
  });

  const httpServer = createServer(app);
  return httpServer;
}

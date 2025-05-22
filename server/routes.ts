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
    // In a real application, this would serve an actual file
    // For now, we'll just return a success message
    res.json({ 
      message: "Syllabus download endpoint", 
      downloadUrl: "/files/syllabus.pdf" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}

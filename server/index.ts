import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import { storage } from "./storage";

// Initialize sample venture data
async function initializeSampleData() {
  const existingVentures = await storage.getAllVentures();
  if (existingVentures.length === 0) {
    await storage.createVenture({
      name: "Nexodata",
      slug: "nexodata",
      website: "www.nexodata.io",
      cohort: "2023-24",
      universityKTO: "Chinese University of Hong Kong",
      valueProposition: "Nexodata provides AI-powered data analytics for deep-tech ventures to unlock insights from complex datasets and accelerate innovation through intelligent automation and predictive modeling.",
      techIP: "Patented machine learning algorithms for real-time data processing and analysis. Proprietary neural network architecture for edge computing applications.",
      foundersBackground: "Founded by PhD researchers from CUHK with 10+ years combined experience in AI/ML and data science. Team includes former tech leads from major AI companies.",
      seekingStakeholders: ["investors", "customers", "tech"],
      whyNow: "Market demand for real-time analytics has reached critical mass. GPU processing costs have dropped 80% making AI accessible to SMEs."
    });
    log("Initialized sample venture data: Nexodata");
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
  if (app.get("env") === "development") {
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
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();

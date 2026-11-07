/**
 * Prakrutik Tattva - Production Node.js Server
 * Designed for GoDaddy cPanel Node.js Hosting, VPS, and cloud environments.
 */

import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// GoDaddy cPanel Phusion Passenger sets process.env.PORT automatically
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "dist");

// Check if dist folder exists
if (!fs.existsSync(DIST_DIR)) {
  console.warn("⚠️ Warning: 'dist' folder not found. Please run 'npm run build' to generate production files.");
}

// Security & compression headers
app.disable("x-powered-by");

// Serve static assets with caching
app.use(express.static(DIST_DIR, {
  maxAge: "1d",
  setHeaders: (res, filePath) => {
    // Cache hashed assets long-term for fast performance
    if (filePath.includes(path.sep + "assets" + path.sep)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    }
  }
}));

// API / Health check route
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    brand: "Prakrutik Tattva",
    mode: process.env.NODE_ENV || "production",
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

// Single Page Application (SPA) routing fallback
// Ensures direct links (like /shop, /about, /contact) work properly
app.get("*", (req, res) => {
  const indexPath = path.join(DIST_DIR, "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(`
      <!DOCTYPE html>
      <html>
        <head><title>Prakrutik Tattva - Build Required</title></head>
        <body style="font-family: sans-serif; text-align: center; padding: 50px;">
          <h2>Prakrutik Tattva Web Server is Running!</h2>
          <p>Please run <code>npm run build</code> to generate the website files inside the <code>dist</code> folder.</p>
        </body>
      </html>
    `);
  }
});

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🌿 Prakrutik Tattva Node.js Server is Live!`);
  console.log(`👉 Listening on port: ${PORT}`);
  console.log(`👉 Serving files from: ${DIST_DIR}`);
  console.log(`==================================================`);
});

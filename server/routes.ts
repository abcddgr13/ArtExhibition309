import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from the client directory
  app.use(express.static(path.join(process.cwd(), 'client')));
  
  // Handle SPA routing - serve index.html for any non-API routes
  app.get('*', (req, res) => {
    // Don't serve index.html for API routes or actual static files
    if (req.path.startsWith('/api/') || 
        req.path.includes('.') || 
        req.path === '/favicon.ico') {
      res.status(404).send('Not Found');
      return;
    }
    
    res.sendFile(path.join(process.cwd(), 'client', 'index.html'));
  });

  const httpServer = createServer(app);
  
  return httpServer;
}

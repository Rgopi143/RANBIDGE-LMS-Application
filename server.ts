import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  // MongoDB Connection
  const mongoUri = process.env.MONGODB_URI;
  let db: any;

  if (mongoUri && mongoUri.trim() !== '') {
    // Connect asynchronously so we don't block server startup
    const client = new MongoClient(mongoUri, {
      serverSelectionTimeoutMS: 5000, // Fail faster if not reachable
    });
    client.connect()
      .then(() => {
        db = client.db();
        console.log('Connected to MongoDB');
      })
      .catch(err => {
        console.warn('Failed to connect to MongoDB. Ensure MONGODB_URI is set in environment variables.', err.message);
      });
  } else {
    console.log('MONGODB_URI not provided, skipping MongoDB connection.');
  }

  // User Progress API (MongoDB)
  app.get('/api/progress/:userId', async (req, res) => {
    if (!db) {
      return res.status(503).json({ error: 'Database not connected or still initializing' });
    }
    try {
      const { userId } = req.params;
      const progress = await db.collection('user_progress').findOne({ userId });
      res.json(progress || { completedLessons: [], moduleStats: {} });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post('/api/progress/:userId', async (req, res) => {
    if (!db) return res.status(503).json({ error: 'Database not connected' });
    try {
      const { userId } = req.params;
      const { completedLessons, moduleStats } = req.body;
      await db.collection('user_progress').updateOne(
        { userId },
        { $set: { completedLessons, moduleStats, updatedAt: new Date() } },
        { upsert: true }
      );
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.get('/api/interns/count', async (req, res) => {
    if (!db) return res.status(503).json({ error: 'Database not connected' });
    try {
      const count = await db.collection('user_progress').countDocuments();
      res.json({ count });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // Terminal API
  app.post('/api/terminal', async (req, res) => {
    const { command } = req.body;
    try {
      // For safety, we only allow certain commands or prefix them
      // But for a "VS Code Server" experience, we'll be a bit more flexible
      const { stdout, stderr } = await execAsync(command);
      res.json({ stdout, stderr });
    } catch (error: any) {
      res.status(500).json({ error: error.message, stdout: error.stdout, stderr: error.stderr });
    }
  });

  // File System API for the IDE
  app.get('/api/files', async (req, res) => {
    try {
      const rootPath = process.cwd();
      const files: any[] = [];

      async function walk(dir: string, parentId: string | null = null) {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === 'dist') continue;
          
          const fullPath = path.join(dir, entry.name);
          const id = Buffer.from(fullPath).toString('base64');
          
          if (entry.isDirectory()) {
            files.push({
              id,
              name: entry.name,
              type: 'folder',
              parentId,
              isOpen: false
            });
            await walk(fullPath, id);
          } else {
            const content = await fs.readFile(fullPath, 'utf-8');
            files.push({
              id,
              name: entry.name,
              type: 'file',
              parentId,
              content
            });
          }
        }
      }

      await walk(rootPath);
      res.json(files);
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post('/api/files/save', async (req, res) => {
    const { id, content } = req.body;
    try {
      const fullPath = Buffer.from(id, 'base64').toString('utf-8');
      await fs.writeFile(fullPath, content, 'utf-8');
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post('/api/files/create', async (req, res) => {
    const { name, type, parentId } = req.body;
    try {
      let parentPath = process.cwd();
      if (parentId) {
        parentPath = Buffer.from(parentId, 'base64').toString('utf-8');
      }
      const fullPath = path.join(parentPath, name);
      
      if (type === 'folder') {
        await fs.mkdir(fullPath, { recursive: true });
      } else {
        await fs.writeFile(fullPath, '', 'utf-8');
      }
      
      res.json({ success: true, id: Buffer.from(fullPath).toString('base64') });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post('/api/files/delete', async (req, res) => {
    const { id } = req.body;
    try {
      const fullPath = Buffer.from(id, 'base64').toString('utf-8');
      const stats = await fs.stat(fullPath);
      
      if (stats.isDirectory()) {
        await fs.rm(fullPath, { recursive: true, force: true });
      } else {
        await fs.unlink(fullPath);
      }
      
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  app.post('/api/upload', async (req, res) => {
    try {
      const { fileName, fileType, fileData, category, subTopic } = req.body;
      const publicDir = path.join(process.cwd(), 'public');
      const pdfsDir = path.join(publicDir, 'pdfs');
      let targetDir = pdfsDir;
      
      if (category) {
          const catStr = category.toLowerCase().replace(/\s+/g, '-');
          targetDir = path.join(pdfsDir, catStr);
      }
      
      await fs.mkdir(targetDir, { recursive: true });
      
      const filePath = path.join(targetDir, fileName);
      
      // Split off the data URI prefix if present (e.g. "data:application/pdf;base64,...")
      const base64Data = fileData.replace(/^data:([A-Za-z-+/]+);base64,/, '');
      const buffer = Buffer.from(base64Data, 'base64');
      await fs.writeFile(filePath, buffer);
      
      // Return public URL path
      const publicPath = `/pdfs/${category ? category.toLowerCase().replace(/\s+/g, '-') + '/' : ''}${fileName}`;
      res.json({ success: true, path: publicPath, fileName, category, subTopic });
    } catch (error) {
      res.status(500).json({ error: String(error) });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import multer from 'multer';
import { google } from 'googleapis';
import fsSync from 'fs';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function startServer() {
  const app = express();
  const PORT = 3000;

  const supabaseUrl = 'https://uoowvjpeuakuvgenhgyx.supabase.co';
  const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvb3d2anBldWFrdXZnZW5oZ3l4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MTg4NjMxNSwiZXhwIjoyMDk3NDYyMzE1fQ.-DcxjArcaNOl8LLDOqmhg5tYjfsy0zt3DXOcKhLSAX0';
  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
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

  // Fast multipart upload using multer (no base64 overhead)
  const multerStorage = multer.diskStorage({
    destination: async (req, file, cb) => {
      try {
        const baseDir = path.join(process.cwd(), 'uploads');

        await fs.mkdir(baseDir, { recursive: true });

        cb(null, baseDir);
      } catch (err: any) {
        cb(err, '');
      }
    },
    filename: (req, file, cb) => {
      // Sanitize filename and avoid collisions
      const sanitized = file.originalname.replace(/[^a-zA-Z0-9._\-\s]/g, '_');
      cb(null, sanitized);
    }
  });

  const upload = multer({
    storage: multerStorage,
    limits: { fileSize: 200 * 1024 * 1024 } // 200 MB max
  });
  const PARENT_FOLDER_ID = "1Oh-DFp1zf_MzCQdNSoHnmG-DhK-4x7qb";
  const UPLOADS_FOLDER_NAME = "Application Uploads";

  // Google Drive Authentication
  let auth: any = null;
  let clientEmail = 'your service account email';
  try {
    if (fsSync.existsSync('credentials.json')) {
      const creds = JSON.parse(fsSync.readFileSync('credentials.json', 'utf8'));
      clientEmail = creds.client_email;
      auth = new google.auth.GoogleAuth({
        keyFile: 'credentials.json',
        scopes: ['https://www.googleapis.com/auth/drive']
      });
    } else if (process.env.GOOGLE_CREDENTIALS) {
      const creds = JSON.parse(process.env.GOOGLE_CREDENTIALS);
      clientEmail = creds.client_email || 'your service account email';
      auth = google.auth.fromJSON(creds);
      auth.scopes = ['https://www.googleapis.com/auth/drive'];
    }
  } catch (err) {
    console.error('Failed to initialize Google Auth:', err);
  }

  const drive = auth ? google.drive({ version: 'v3', auth }) : null;

  // Test connection and folder access on startup
  if (drive) {
    drive.files.get({ fileId: PARENT_FOLDER_ID, fields: 'id, name' })
      .then(res => console.log(`Drive Access Verified: Found parent folder "${res.data.name}"`))
      .catch((err: any) => {
        console.error(`CRITICAL: Drive Access Error for folder ${PARENT_FOLDER_ID}:`, err.message);
        console.warn(`ACTION REQUIRED: Please share your Google Drive folder (${PARENT_FOLDER_ID}) with this email: ${clientEmail} and give it EDITOR access.`);
      });
  }

  app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
      if (!drive) {
        return res.status(503).json({ error: 'Google Drive is not connected.' });
      }
      if (!req.file) {
        return res.status(400).json({ error: 'No file provided' });
      }

      console.log(`Uploading file: ${req.file.originalname} directly to: ${PARENT_FOLDER_ID}`);

      const response = await drive.files.create({
        requestBody: {
          name: (req.body.title || req.file.originalname).toLowerCase().endsWith('.pdf') 
            ? (req.body.title || req.file.originalname)
            : `${req.body.title || req.file.originalname}.pdf`,
          parents: [PARENT_FOLDER_ID]
        },
        media: {
          mimeType: req.file.mimetype,
          body: fsSync.createReadStream(req.file.path)
        },
        fields: 'id, name, webViewLink',
        supportsAllDrives: true
      });

      const fileId = response.data.id || '';
      await drive.permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone'
        }
      });

      if (fsSync.existsSync(req.file.path)) {
        fsSync.unlinkSync(req.file.path);
      }

      res.json({
        success: true,
        fileId: fileId,
        fileName: response.data.name,
        previewUrl: `https://drive.google.com/file/d/${fileId}/preview`
      });

    } catch (error: any) {
      console.warn('Google Drive Upload Restricted, using Supabase Secret Service Role:', error.message);
      
      try {
        const fileName = `${Date.now()}-${req.file.originalname}`;
        const fileData = fsSync.readFileSync(req.file.path);

        const isImage = req.file.mimetype.startsWith('image/');
        const bucketName = isImage ? "Pics" : "PDF's";

        const { data, error: uploadError } = await supabase.storage
          .from(bucketName)
          .upload(fileName, fileData, {
            contentType: req.file.mimetype,
            upsert: true
          });

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from(bucketName)
          .getPublicUrl(fileName);
        if (fsSync.existsSync(req.file.path)) {
          fsSync.unlinkSync(req.file.path);
        }

        res.json({
          success: true,
          source: 'supabase',
          fileName: (req.body.title || req.file.originalname),
          previewUrl: publicUrl,
          downloadUrl: publicUrl,
          message: 'Stored in Supabase Cloud Storage'
        });
      } catch (supabaseErr: any) {
        console.error('Supabase Fallback Error:', supabaseErr.message);
        const localUrl = `/uploads/${req.file.filename}`;
        res.json({
          success: true,
          source: 'local',
          fileName: (req.body.title || req.file.originalname),
          previewUrl: localUrl,
          downloadUrl: localUrl,
          message: 'Stored locally (Cloud storage restricted)'
        });
      }
    }
  });

  app.get('/api/supabase-files', async (req, res) => {
    try {
      async function getAllFiles(bucket: string, folder: string = ''): Promise<any[]> {
        console.log(`Scanning bucket: ${bucket}, folder: ${folder}`);
        const { data, error } = await supabase.storage.from(bucket).list(folder, {
          limit: 100,
          sortBy: { column: 'name', order: 'asc' },
        });

        if (error) throw error;

        let files: any[] = [];
        for (const item of data) {
          const fullPath = folder ? `${folder}/${item.name}` : item.name;
          
          // In Supabase Storage API, folders typically don't have metadata or specific properties
          // But they appear in the list. We check if it's a file by the presence of metadata.size 
          // or if it's specifically marked as a folder in some client versions.
          const isFolder = !item.id || !item.metadata;

          if (isFolder && item.name !== '.emptyFolderPlaceholder') {
            // It's a folder, recurse
            const subFiles = await getAllFiles(bucket, fullPath);
            files = [...files, ...subFiles];
          } else if (item.id) {
            // It's a file
            const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(fullPath);
            files.push({
              id: item.id,
              title: item.name,
              category: bucket === "Pics" ? 'Images' : 'PDFs',
              size: item.metadata ? (item.metadata.size / (1024 * 1024)).toFixed(1) + ' MB' : '1.0 MB',
              type: bucket === "Pics" ? 'image' : 'pdf',
              downloadUrl: publicUrl,
              thumbnail: bucket === "Pics" ? publicUrl : 'https://img.icons8.com/3d-fluency/188/pdf.png',
              source: 'supabase',
              path: fullPath
            });
          }
        }
        return files;
      }

      const [pdfFiles, picFiles] = await Promise.all([
        getAllFiles("PDF's"),
        getAllFiles("Pics")
      ]);

      res.json([...pdfFiles, ...picFiles]);
    } catch (error: any) {
      console.error('Supabase List Error:', error.message);
      res.json([]);
    }
  });

  app.get('/api/migrate-drive-to-supabase', async (req, res) => {
    try {
      if (!drive) throw new Error('Drive not connected');
      
      console.log('Starting migration from Drive to Supabase...');
      
      const response = await drive.files.list({
        q: `'${PARENT_FOLDER_ID}' in parents and trashed = false and (mimeType = 'application/pdf' or mimeType contains 'image/')`,
        fields: 'files(id, name, mimeType)',
        pageSize: 1000,
        supportsAllDrives: true,
        includeItemsFromAllDrives: true
      });

      const files = response.data.files || [];
      const results = [];

      for (const file of files) {
        try {
          console.log(`Migrating: ${file.name}`);
          
          // Download from Drive
          const driveFile = await drive.files.get({
            fileId: file.id,
            alt: 'media'
          }, { responseType: 'arraybuffer' });

          const buffer = Buffer.from(driveFile.data as ArrayBuffer);
          const isImage = file.mimeType?.startsWith('image/');
          const bucketName = isImage ? "Pics" : "PDF's";

          // Upload to Supabase
          const fileName = `${Date.now()}-${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from(bucketName)
            .upload(fileName, buffer, {
              contentType: file.mimeType || 'application/octet-stream',
              upsert: true
            });

          if (uploadError) throw uploadError;
          
          results.push({ name: file.name, status: 'success' });
        } catch (err: any) {
          console.error(`Failed to migrate ${file.name}:`, err.message);
          results.push({ name: file.name, status: 'failed', error: err.message });
        }
      }

      res.json({ success: true, processed: files.length, results });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
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

import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config({ path: '.env.local' });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function start() {
  const app = express();
  app.use(express.json());

  // Load and mount the contact API handler
  const { default: contactHandler } = await import('./api/contact.ts');
  app.post('/api/contact', (req, res) => {
    contactHandler(req as any, res as any);
  });

  // Create Vite dev server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(vite.middlewares);

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`\n✅ Dev server with API running at http://localhost:${PORT}\n`);
  });
}

start().catch(console.error);

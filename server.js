import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files from dist folder (Vite build output)
app.use(express.static(join(__dirname, 'dist')));

// Serve assets from public folder
app.use('/assets', express.static(join(__dirname, 'public/assets')));
app.use('/img', express.static(join(__dirname, 'public/img')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

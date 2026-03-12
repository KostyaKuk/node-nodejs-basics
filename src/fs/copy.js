import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const sourceDir = path.join(__dirname, 'files');
  const targetDir = path.join(__dirname, 'files_copy');

  try {
    await fs.access(sourceDir);
    await fs.access(targetDir);
    throw new Error('FS operation failed');
  } catch (error) {
    if (error.code === 'ENOENT') {
      if (error.path === targetDir || error.path === sourceDir) {
        await fs.cp(sourceDir, targetDir, { recursive: true });
      }
    } else {
      throw error;
    }
  }
};

await copy();

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const pathToFile = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    const logContent = await fs.readFile(pathToFile, 'utf8');
    console.log(logContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
  }
};

await read();

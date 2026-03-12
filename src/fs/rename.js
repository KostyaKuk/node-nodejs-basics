import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
 const pathToWrong = path.join(__dirname, 'files', 'wrongFilename.txt');
    const pathToProper = path.join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(pathToWrong, pathToProper);
    } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await rename();

import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
const readStream = createReadStream(filePath, 'utf-8');
    

  readStream.pipe(process.stdout);
};

await read();

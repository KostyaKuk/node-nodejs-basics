import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    
    createReadStream(filePath, 'utf8')
        .pipe(process.stdout);
};

await read();

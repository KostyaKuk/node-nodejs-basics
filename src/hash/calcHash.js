import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';
import { createHash } from 'node:crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  try {
    const hash = createHash('sha256');

    await new Promise((resolve, reject) => {
      createReadStream(filePath)
        .pipe(hash)
        .on('finish', resolve)
        .on('error', reject);
    });

    const hexHash = hash.digest('hex');
    console.log(hexHash);
  } catch (err) {
    console.error('`Error with', err.message);
  }
};

await calculateHash();

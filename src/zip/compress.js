import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
 const targetFile = path.join(__dirname, 'files', 'fileToCompress.txt')
 const modifiedFilePath = path.join(__dirname, 'files', 'archive.gz')

 const readStream = createReadStream(targetFile);
 const zipStream = createGzip()
 const writeStream = createWriteStream(modifiedFilePath);

 await pipeline(
    readStream,
    zipStream,
    writeStream
  );

};

await compress();

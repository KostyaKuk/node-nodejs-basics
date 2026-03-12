import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
   const pathToCompressedFile = path.join(__dirname, 'files', 'archive.gz')
   const output = path.join(__dirname, 'files', 'newFileToCompress.txt')

    const readStream = createReadStream(pathToCompressedFile);
    const gunzipStream = createGunzip()
    const writeStream = createWriteStream(output);

    await pipeline(
      readStream,
      gunzipStream,
      writeStream
    )
};

await decompress();

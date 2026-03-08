import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const pathToFile = path.join(__dirname, 'worker.js');
  const cores = cpus().length;

  const promises = [];

  for (let i = 0; i < cores; i++) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(pathToFile, { workerData: { n: 10 + i } });

      worker.on('message', (value) => {
        resolve({ data: value, status: 'resolved' });
      });
      worker.on('error', () => {
        resolve({ data: null, status: 'error' });
      });
    });

    promises.push(promise);
  }

  try {
    const result = await Promise.all(promises);
    console.log(result);
  } catch (err) {
    console.error('Error with', err.message);
  }
};

await performCalculations();

import { fileURLToPath } from 'node:url';
import path from 'node:path';
import os from 'node:os';
import { Worker } from 'node:worker_threads';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerPath = path.resolve(__dirname, 'worker.js');
  const cpusCount = os.cpus().length;

  let number = 10;
  const arrayWorkers = [];

  for (let i = 0; i < cpusCount; i++) {
    arrayWorkers.push(
      new Promise((resolve) => {
        new Worker(workerPath, { workerData: number + i })
          .on('message', (result) =>
            resolve({ data: result, status: 'resolved' })
          )
          .on('error', (error) => resolve({ data: null, status: 'error' }));
      })
    );
  }
  const result = await Promise.all(arrayWorkers);
  console.log(result);
  return result;
};

await performCalculations();

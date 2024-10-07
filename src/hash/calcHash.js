import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );

  const hashFunc = createHash('sha256');
  const fileStream = createReadStream(filePath);

  fileStream
    .on('data', (data) => {
      hashFunc.update(data);
    })
    .on('end', () => {
      const fileHash = hashFunc.digest('hex');
      console.log(fileHash);
    });
};

await calculateHash();

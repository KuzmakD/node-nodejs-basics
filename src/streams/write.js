import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  const outputStream = fs.createWriteStream(filePath);

  process.stdin.on('data', (data) => {
    outputStream.write(data);
    process.exit();
  });
};

await write();

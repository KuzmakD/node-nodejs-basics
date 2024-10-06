import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  const fileReadStream = fs.createReadStream(filePath, 'utf8');

  fileReadStream.on('data', (data) => process.stdout.write(data));
};

await read();

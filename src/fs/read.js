import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

const read = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  await fs.readFile(filePath, 'utf8', (err, file) => {
    if (err) throw new Error('FS operation failed');
    console.log(file);
  });
};

await read();

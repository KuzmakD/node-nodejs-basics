import path from 'node:path';
import url from 'node:url';
import fs from 'node:fs';

const list = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesPath = path.resolve(__dirname, 'files');

  await fs.readdir(filesPath, (err, files) => {
    if (err) throw new Error('FS operation failed');
    console.log(files);
  });
};

await list();

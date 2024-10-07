import path from 'node:path';
import url from 'node:url';
import { unlink } from 'node:fs';

const remove = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRemove.txt');

  await unlink(filePath, (error) => {
    if (error) throw new Error('FS operation failed');
  });
};

await remove();

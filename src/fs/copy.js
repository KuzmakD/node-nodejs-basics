import path from 'path';
import fs from 'fs/promises';
import url from 'url';

const copy = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filesPath = path.resolve(__dirname, 'files');
  const filesCopyPath = path.resolve(__dirname, 'files_copy');

  try {
    await fs.access(filesPath);
    await fs.mkdir(filesCopyPath, { flags: 'wx' });
    await fs.cp(filesPath, filesCopyPath, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();

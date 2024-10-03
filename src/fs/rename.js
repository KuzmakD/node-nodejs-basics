import path from 'path';
import url from 'url';
import fs from 'fs/promises';
import { existsSync } from 'node:fs';

const rename = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const fileRenamedPath = path.resolve(__dirname, 'files', 'properFilename.md');

  try {
    await fs.access(filePath);
    const isRenamedFileExist = existsSync(fileRenamedPath);

    if (isRenamedFileExist) {
      throw new Error("FS operation failed");
    }

    await fs.rename(filePath, fileRenamedPath);
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await rename();

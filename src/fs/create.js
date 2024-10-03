import path from 'path';
import fs from 'fs';
import url from 'url';

const create = async () => {
  const __filename = url.fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileParh = path.resolve(__dirname, 'files', 'fresh.txt');
  const data = 'I am fresh and young';

  await fs.writeFile(fileParh, data, { flag: 'wx' }, (err) => {
    if (err) throw new Error('FS operation failed');
  });
};

await create();

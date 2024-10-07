import { fileURLToPath } from 'node:url';
import path from 'path';
import fs from 'node:fs';
import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileSourcePath = path.resolve(__dirname, 'files', 'achieve.gz');
  const fileDestinationPath = path.resolve(
    __dirname,
    'files',
    'fileToCompress.txt'
  );

  const unzip = createGunzip();
  const fileReadStream = fs.createReadStream(fileSourcePath);
  const fileWriteStream = fs.createWriteStream(fileDestinationPath);

  pipeline(fileReadStream, unzip, fileWriteStream, (error) => {
    if (error) throw new Error('Uncompression operation failed');
    process.exit();
  });
};

await decompress();

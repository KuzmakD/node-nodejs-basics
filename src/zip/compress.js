import { fileURLToPath } from 'url';
import path from 'node:path';
import fs from 'node:fs';
import { createGzip} from 'node:zlib';
import { pipeline } from 'node:stream';

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileSourcePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
  const fileDestinationPath = path.resolve(__dirname, 'files', 'achieve.gz');

  const gzip = createGzip();
  const fileReadStream = fs.createReadStream(fileSourcePath);
  const fileWriteStream = fs.createWriteStream(fileDestinationPath);

  pipeline(fileReadStream, gzip, fileWriteStream, (error) => {
    if (error) throw new Error('Compression operation failed');
    process.exit();
  });
};

await compress();

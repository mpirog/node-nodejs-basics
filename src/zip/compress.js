import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { __dirname } from '../path.module.js';

import { createGzip } from 'zlib';
import { pipeline } from 'stream';

const sourceFilePath = path.resolve(__dirname, './zip/files/fileToCompress.txt');
const destinationFilePath = path.resolve(__dirname, './zip/files/archive.gz');

export const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(sourceFilePath);
  const destination = createWriteStream(destinationFilePath);

  return new Promise((resolve) => {
    resolve(
      pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
        }
      })
    );
  });
};
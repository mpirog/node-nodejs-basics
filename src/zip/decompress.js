import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import { __dirname } from '../path.module.js';

import { createGunzip } from 'zlib';
import { pipeline } from 'stream';

const sourceFilePath = path.resolve(__dirname, './zip/files/archive.gz');
const destinationFilePath = path.resolve(__dirname, './zip/files/fileToCompress.txt');

export const decompress = async () => {
  const ungzip = createGunzip();
  const source = createReadStream(sourceFilePath);
  const destination = createWriteStream(destinationFilePath);

  return new Promise((resolve) => {
    resolve(
      pipeline(source, ungzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
        }
      })
    );
  });
};
import fs from 'fs';
import path from 'path';
import { stdout as output, stdin as input } from 'process';

import readline from 'readline';

import { __dirname } from '../path.module.js';

const sourceFilePath = path.resolve(__dirname, './streams/files/fileToWrite.txt');

export const write = async () => {
  const writeStream = fs.createWriteStream(sourceFilePath);

  const rl = readline.createInterface({ input, output });

  return new Promise((resolve) => {
    rl.on('line', (input) => {
      resolve(writeStream.write(`${input}\n`));
    });
  });
};

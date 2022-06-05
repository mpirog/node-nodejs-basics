import fs from 'fs';
import path from 'path';
import { stdout } from 'process';
import { __dirname } from '../path.module.js';

const sourceFilePath = path.resolve(__dirname, './streams/files/fileToRead.txt');

export const read = async () => {
  return new Promise((resolve) => {
    fs.createReadStream(sourceFilePath).on('data', (data) => {      
      resolve(stdout.write(`${data.toString()}\n`));
    });
  });
};

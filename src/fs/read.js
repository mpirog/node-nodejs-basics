import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../path.module.js';

const sourceFilePath = path.resolve(__dirname, './fs/files/fileToRead.txt');

export const read = async () => {
  try {
    let data = await fs.readFile(sourceFilePath);
    console.log(data.toString())
  } catch {
    throw new Error('FS operation failed');
  }
};

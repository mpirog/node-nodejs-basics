import fs from 'fs/promises';
import path from 'path';
import { __dirname } from './custom-module.js';

export const rename = async () => {
  const wrongFilePath = path.resolve(__dirname, './files/wrongFilename.txt');
  const properFilePath = path.resolve(__dirname, './files/properFilename.md');

  try {
    await fs.rename(wrongFilePath, properFilePath);
  } catch {
    throw new Error('FS operation failed')
  }
};

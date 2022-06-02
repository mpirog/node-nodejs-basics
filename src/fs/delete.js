import fs from 'fs/promises';
import path from 'path';
import { __dirname } from './custom-module.js';

export const remove = async () => {
  const removeFilePath = path.resolve(__dirname, './files/fileToRemove.txt');

  try {
    await fs.rm(removeFilePath);
  } catch (err) {
    throw new Error('FS operation failed');
  }
};

import fs from 'fs/promises';
import path from 'path';
import { __dirname } from './custom-module.js';

const sourceDirPath = path.resolve(__dirname, './files');

const readDirectory = async () => {
  const fiels = await fs.readdir(sourceDirPath);
  return fiels;
};

export const list = async () => {
  try {
    const statSouerce = await fs.stat(sourceDirPath);

    if (!statSouerce.isDirectory) {
      throw new Error('FS operation failed');
    }

    console.log([...await readDirectory()].join('\n'));
  } catch {
    throw new Error('FS operation failed');
  }
};

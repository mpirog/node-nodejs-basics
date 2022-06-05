import fs from 'fs/promises';
import path from 'path';
import { __filename, __dirname } from '../path.module.js';

const sourceDirPath = path.resolve(__dirname, './fs/files');
const copyDirPath = path.resolve(__dirname, './fs/files-copy');

const makeDirectory = async () => {
  try {
    const statCopy = await fs.stat(copyDirPath);

    if (statCopy.isDirectory()) {
      const err = new Error('FS operation failed');
      err.code = 'FS_CUSTOM_ERR';
      throw err;
    }
  } catch (err) {
    if (err.code === 'FS_CUSTOM_ERR') {
      throw err;
    }

    await fs.mkdir(copyDirPath);
  }
};

const readDirectory = async () => {
  const fiels = await fs.readdir(sourceDirPath);
  return fiels;
};

const copyFile = async (fileName) => {
  const currentPath = `${sourceDirPath}/${fileName}`;
  const newPath = `${copyDirPath}/${fileName}`;

  await fs.copyFile(currentPath, newPath);
};

//----------------------------------
export const copy = async () => {
  try {
    const statSouerce = await fs.stat(sourceDirPath);

    if (!statSouerce.isDirectory) {
      throw new Error('FS operation failed');
    }

    await makeDirectory();

    [...await readDirectory()].forEach(async (fileName) => {
      await copyFile(fileName);
    });
  } catch (err) {
    if (err) {
      throw new Error('FS operation failed');
    }
  }
};

import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../path.module.js';

export const create = async () => {
  const data = 'I am fresh and young';
  const sourcePath = path.resolve(__dirname, './fs/files/fresh.txt');

  try {
    const stat = await fs.stat(sourcePath);
  
    if (stat.isFile()) {
      const err = new Error('FS operation failed');
      err.code = 'FS_ERR';
      throw err;
    } else {
      await fs.writeFile(sourcePath, data);
    }
  } catch (err) {
    if (err.code === 'FS_ERR') {
      throw err;
    }

    await fs.writeFile(sourcePath, data);
  }  
};

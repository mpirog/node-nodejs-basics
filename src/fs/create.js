import fs from 'fs/promises';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const create = async () => {
  const data = 'I am fresh and young';
  const sourcePath = path.resolve(__dirname, './files/fresh.txt');

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
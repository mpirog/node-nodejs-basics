import fs from 'fs/promises';
import path from 'path';
import { __dirname } from '../path.module.js';
import { createHash } from 'crypto';

const sourceFilePath = path.resolve(__dirname, './hash/files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
  let data = await fs.readFile(sourceFilePath);
  const hash = createHash("sha256");

  hash.update(data);

  console.log(hash.digest('hex'));
};

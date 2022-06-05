import process from 'process';
import { read } from "./read.js";
import { write } from "./write.js";
import { transform } from './transform.js';

if (process.argv.includes('--read')) {
  await read();
}

if (process.argv.includes('--write')) {
  await write();
}

if (process.argv.includes('--transform')) {
  await transform();
}

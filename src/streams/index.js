import process from 'process';
import { read } from "./read.js";
import { write } from "./write.js";

if (process.argv.includes('--read')) {
  await read();
}

if (process.argv.includes('--write')) {
  await write();
}
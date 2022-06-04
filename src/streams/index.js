import process from 'process';
import { read } from "./read.js";

if (process.argv.includes('--read')) {
  await read();
}
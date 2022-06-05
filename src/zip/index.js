import process from 'process';
import { compress } from "./compress.js";
import { decompress } from "./decompress.js";

if (process.argv.includes('--compress')) {
  await compress();
}

if (process.argv.includes('--decompress')) {
  await decompress();
}

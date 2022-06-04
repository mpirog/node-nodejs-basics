import process from 'process';
import { create } from "./create.js";
import { copy } from "./copy.js";
import { rename } from "./rename.js";
import { remove } from "./delete.js";
import { list } from "./list.js";
import { read } from "./read.js";

if (process.argv.includes('--create')) {
  await create();
}

if (process.argv.includes('--copy')) {
  await copy();
}

if (process.argv.includes('--rename')) {
  await rename();
}

if (process.argv.includes('--remove')) {
  await remove();
}

if (process.argv.includes('--list')) {
  await list();
}

if (process.argv.includes('--read')) {
  await read();
}

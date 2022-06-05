import { stdout as output, stdin as input } from 'process';
import { spawn } from 'child_process';
import { __dirname, __filename } from "../path.module.js";
import path from 'path';

const sourceFilePath = path.resolve(__dirname, './cp/files/script.js');

export const spawnChildProcess = async (args) => {
  const ls = spawn('node.exe', [sourceFilePath, ...args])

  ls.stdout.pipe(output);
  
  input.pipe(ls.stdin);
};

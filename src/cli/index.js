import process from 'process';
import { parseArgs } from './args.js';
import { parseEnv } from './env.js';

if (process.argv.includes('args')) {
  parseArgs();
}

if (process.argv.includes('env')) {
  parseEnv();
}

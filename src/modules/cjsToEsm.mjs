import path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import {createServer as createServerHttp} from 'http';
import './files/c.js';
import ajson from './files/a.json' assert {type: "json"};
import bjson from './files/b.json' assert {type: "json"};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = ajson;
} else {
  unknownObject = bjson;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};


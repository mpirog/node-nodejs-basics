import { Worker } from "worker_threads";
import { cpus } from "os";

import { __dirname } from "../path.module.js";
import path from 'path';

const sourceFilePath = path.resolve(__dirname, './wt/worker.js');

const runWorker = (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(sourceFilePath, { workerData });

    worker.on('message', (data) => {
      resolve({ data, status: "resolved" });
    });

    worker.on('error', () => {
      resolve({ data: null, status: "error" });
    });
    
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};

export const performCalculations = async () => {
  const workers = [];

  const number = cpus().length + 10;

  let errNumber = Math.ceil(Math.random(number) * number);
  errNumber = errNumber < 10 ? errNumber + 10 : errNumber; 
  
  for (let i = 0; i < cpus().length; i++) {
    let workerData = {
      number: (i + 1) + 10,
      errNumber
    };

    workers.push(runWorker(workerData));
  }
  
  Promise.all(workers).then((value) => {
    console.log(value);
  });
};

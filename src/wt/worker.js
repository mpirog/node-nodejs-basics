import { parentPort, workerData } from 'worker_threads';

// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  if (workerData.number === workerData.errNumber) {
    throw new Error('Error worker!');
  }

  return nthFibonacci(workerData.number);
};

parentPort.postMessage(sendResult());

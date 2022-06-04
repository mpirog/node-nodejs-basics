import CustomTransform  from './CustomTransform.js';
import { stdout as output, stdin as input } from 'process';

export const transform = async () => {
  const ts = new CustomTransform()

  input.pipe(ts).pipe(output);
};
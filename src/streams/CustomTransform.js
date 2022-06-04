import { Transform } from 'stream';

class CustomTransform extends Transform {
  constructor() {
    super(); 
  }

  _revert(str) {
    console.log(str.split('').reverse().join(''));
  }

  _transform(chunk, _, callback) {
    callback(this._revert(chunk.toString()))
  }
}

export default CustomTransform;
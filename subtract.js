import { createMathOperation } from './helper.js';

const subtract = createMathOperation(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);

module.exports = subtract;
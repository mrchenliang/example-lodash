import { createMathOperation } from './helper.js';

export const subtract = createMathOperation(function(minuend, subtrahend) {
  return minuend - subtrahend;
}, 0);
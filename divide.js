import { createMathOperation } from './helper.js';

const divide = createMathOperation(function(dividend, divisor) {
  return dividend / divisor;
}, 1);

module.exports = divide;
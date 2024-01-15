import { createMathOperation } from './helper.js';

const multiply = createMathOperation(function(multiplier, multiplicand) {
  return multiplier * multiplicand;
}, 1);

module.exports = multiply;
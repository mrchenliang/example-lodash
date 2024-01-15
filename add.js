import { createMathOperation } from './helper.js';

const add = createMathOperation(function(augend, addend) {
  return augend + addend;
}, 0);

module.exports = add;
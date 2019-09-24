/**
 * Import required modules.
 */
import {
  add,
  subtract,
  multiply,
  divide,
} from 'https://vihuvac.github.io/features/deno/math/operations_v1.ts';


/**
 * Main self-invoking function.
 */
(() => {
  // Invoke operation methods.
  const addOp = add(2, 2);
  const subtractOp = subtract(4, 2);
  const multiplyOp = multiply(4, 4);
  const divideOp = divide(10, 2);

  // Print results.
  console.log('Printing the results of the operations:');
  console.log('add(2, 2) =>', addOp);
  console.log('subtract(4, 2) =>', subtractOp);
  console.log('multiply(4, 4) =>', multiplyOp);
  console.log('divide(10, 2) =>', divideOp);
})();

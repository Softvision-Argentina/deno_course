/**
 * Import required modules.
 */
import {
  add,
  subtract,
  multiply,
  divide,
} from 'https://vihuvac.github.io/features/deno/math/operations_v1.ts';
import {
  add as adder,
} from 'https://vihuvac.github.io/features/deno/math/operations_v2.ts';
import { bgYellow, gray, bold } from 'https://deno.land/std/fmt/colors.ts';


/**
 * Main self-invoking function.
 */
(() => {
  // Invoke operation methods.
  const addOp = add(2, 2);
  const subtractOp = subtract(4, 2);
  const multiplyOp = multiply(4, 4);
  const divideOp = divide(10, 2);
  const adderOp = adder(2, 2);

  // Print results.
  console.log('Printing the results of the operations:');
  console.log(bgYellow(gray(bold(`add(2, 2) => ${addOp}`))));
  console.log('subtract(4, 2) =>', subtractOp);
  console.log('multiply(4, 4) =>', multiplyOp);
  console.log('divide(10, 2) =>', divideOp);
  console.log(bgYellow(gray(bold(`adder(2, 2) => ${adderOp}`))));
})();

/*

Unwinding

- After the base case is met, the recursive fn starts returning values and 'unwinding'

- As it unwinds, the fn are taken off the stack

- The values are returned in the reversed order

*/

function sumUpTo(str) {
  if (n === 1) {
    return 1;
  }
  return n + sumUpTo(n - 1);
}

console.log(sumUpTo(5));

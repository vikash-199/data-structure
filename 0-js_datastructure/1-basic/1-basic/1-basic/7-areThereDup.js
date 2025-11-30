/*
✅ Problem Statement: Are There Duplicates? (Frequency Counter Pattern)

You are given a function that accepts a variable number of arguments (any number of inputs). Your task is to determine whether any of the passed arguments appear more than once.

Requirements:

The function can receive any number of inputs (e.g., numbers, strings).

Return:

true → if any value appears more than once

false → if all values are unique

You must solve the problem using the Frequency Counter pattern.

You cannot use advanced JavaScript methods like Set() or array helpers unless you build your own logic.

Example Inputs & Outputs:
Input	Output	Explanation
areThereDuplicates(1, 2, 3)	false	All values are unique
areThereDuplicates(1, 2, 2)	true	2 appears twice
areThereDuplicates('a', 'b', 'c', 'a')	true	'a' appears multiple times
Goal:

Implement the logic to check duplicates by:

Looping through all arguments

Building a frequency counter object to track occurrences

Returning true if any value occurs more than once

Returning false otherwise
*/

// method 1
function areThereDuplicates() {
  let fc = {};

  for (let ele of arguments) {
    fc[arguments[ele]] ? fc[arguments[ele]]++ : (fc[arguments[ele]] = 1);
  }
  for (let key in fc) {
    if (fc[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 34.4, 1));

// method 2

function areThereDuplicate() {
  return new Set(arguments).size !== arguments.length;
}

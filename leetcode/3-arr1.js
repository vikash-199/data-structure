/*
// Truthey and Falsy
In this question you ask to remove all values from an arry that areno't truthy (i.g. remove all the falsy values).
But what dose that mean? javascript have two boolean values, true and false. But it also has truthy and falsy values. The following values are always falsy:
- false
- all from of zero (0, -0, 0n)
- empty strings ('', "", ``)
- null
- undefined

 Example: If(userInput) - if inupt is zero or empty string, it will return false.
 so that we have to use -
 if(userInput !== null && userInput !== '')

const a = 0;
function check(a) {
  if (a !== null && a !== "") { // if(a) - it will return false becouse a is zero
    console.log(a);
  } else {
    console.log("Falsy");
  }
}
check(a);


// Truthiness and Logical operators

const stringValuse = textInput || 'default value';

In Javscript logical oprator dose not return boolean value it returns the value of one of the operands. 

- The or oprator || return the first value if the first value is truthey (without evaluating the second value). otherwise it returns the second value.

- The and operator && return the first value if the first value is falsy (without evaluating the second value). otherwise it returns the second value.

- The nullish coalescing operator ?? return the first value if the first value is not null or undefined. otherwise it returns the second value.

- const n = '' ?? 'hello'
- const n = '' ? '' : 'hello' (both are same)

*/
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

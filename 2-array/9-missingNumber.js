// Method-1
function findMissingletter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return "";
}
console.log(findMissingletter(["e", "f", "g", "i", "j"]));

// Method-2
function missingNumber(arr) {
  let lengthOfArray = arr.length + 1;
  const actualSum = (lengthOfArray * (lengthOfArray + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return actualSum - sum;
}
console.log(missingNumber([1, 3, 4, 5]));

// Method-3
function findMissingChar(arr) {
  const startChar = arr[0].charCodeAt(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    if (arr[i].charCodeAt(currentChar) !== startChar + i) {
      return String.fromCharCode(startChar + i);
    }
  }
}
console.log(findMissingChar(["a", "c", "d"]));

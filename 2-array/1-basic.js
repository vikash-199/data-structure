const arr = [1, 2, 3, 4, 5];

// For check every element
const everyEleCheck = arr.every((num) => num > 0);

console.log(everyEleCheck);

// Some-> retun true if any element stisfy the condition
const checkGre = arr.some((num) => num > 4);

console.log(checkGre);

// Method -2
const checkNum = (arr) => {
  for (let ele of arr) {
    if (ele < 0) return false;
  }
  return true;
};
console.log(checkNum([1, 4, 8, 2]));

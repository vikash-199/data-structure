function sortArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(sortArray([1, 2, 3, 1, 4, 7, 8]));

function s(arr) {
  let res = arr.sort((a, b) => a - b);
  return res;
}

console.log(s([1, 8, 4, 7, 2, 1]));

const sortA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortA([1, 4, 9, 2, 4, 1]));

const sortArr = (arr) => {
  let res = arr.sort((a, b) => a - b);
  return res;
};
console.log(sortArr([1, 4, 9, 2, 4, 1]));

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

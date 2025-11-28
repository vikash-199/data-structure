function maxSum(arr, num) {
  let currentArr = arr.sort((a, b) => b - a);
  let res = 0;
  for (let i = 0; i < num; i++) {
    res += currentArr[i];
  }
  return res;
}

console.log(maxSum([1, 5, 7, 4, 3], 2));

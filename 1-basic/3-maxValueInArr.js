// Method-1
function maxValue(arr) {
  let max = arr[0];

  for (let val of arr) {
    if (max < val) {
      max = val;
    }
  }
  return max;
}

// Method-2
function maxValue1(arr) {
  return Math.max(...arr);
}

console.log(maxValue1([1, 34, 67, -17, 0, 67]));

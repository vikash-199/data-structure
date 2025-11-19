function maxValue(arr) {
  let res = 0;
  for (let n of arr) {
    if (res < n) {
      res = n;
    }
  }
  return res;
}
console.log(maxValue([-10, -5, 3, 7, 9, 121, 100, 19]));

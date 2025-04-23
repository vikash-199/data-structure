function sumZeroElement(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let start = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (start + arr[j] === 0) {
        res.push([start, arr[j]]);
      }
    }
  }
  return res;
}
console.log(sumZeroElement([1, 2, 4, 6, -1, -4]));

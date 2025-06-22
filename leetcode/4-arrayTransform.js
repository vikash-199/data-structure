function fn(num, i) {
  return num + 1;
}
let arr = [1, 2, 3, 4];
var map = function (arr, fn) {
  let returnedArray = [];
  for (let i = 0; i < arr.length; i++) {
    returnedArray[i] = fn(arr[i], i);
  }
  return returnedArray;
};
console.log(map(arr, fn));

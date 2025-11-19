const arr = [1, 3, 4, 6, 89, 9, -10];

function sum(arr) {
  //   return arr.reduce((sum, ele) => (sum += ele), 0);
  //   return arr.map((ele) => ele * 2);
  return arr.every((ele) => ele > 0);
}

console.log(sum(arr));

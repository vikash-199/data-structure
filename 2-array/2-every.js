const arr = [1, 2, 3, 4, 5];

// Method-1
const sunSeqEven = arr
  .filter((num) => num % 2 === 0)
  .reduce((sum, num) => (sum = sum + num * num), 0);

// Method-2

function sunSeqEven1(array) {
  let sum = 0;
  for (let num of array) {
    if (num % 2 === 0) {
      sum += num * num;
    }
  }
  return sum;
}
console.log(sunSeqEven1(arr));

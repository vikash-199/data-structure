function missingNumber(arr) {
  let lengthOfArray = arr.length + 1;
  const actualSum = (lengthOfArray * (lengthOfArray + 1)) / 2;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return actualSum - sum;
}
console.log(missingNumber([1, 3, 4, 5]));

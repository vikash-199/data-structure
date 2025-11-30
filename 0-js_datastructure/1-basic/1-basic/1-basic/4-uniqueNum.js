// method 1

function uniqueNumber(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueNumber([1, 1, 1, 2, 2, 3, 4, 6]));

// method 3
function uniqueNum(arr) {
  let sample = [];
  for (let ele of arr) {
    if (!sample.includes(ele)) {
      sample.push(ele);
    }
  }
  return sample.length;
}

console.log(uniqueNum([-1, 2, -4, 1]));

// Method-1
function remduplicate(arr) {
  let array = [];
  for (let ele of arr) {
    if (!array.includes(ele)) {
      array.push(ele);
    }
  }
  return array;
}

// Method-2
function remduplicate1(arr) {
  return Array.from(new Set(arr));
}

console.log(remduplicate1([1, 3, 1, 4, 6, 8, 9, 9, 5, 1, 1, 1]));

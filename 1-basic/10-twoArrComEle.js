// Method-1
function interSection(arr1, arr2) {
  let commonArr = [];
  const a1 = remDup(arr1);
  for (let ele of a1) {
    if (arr2.includes(ele)) {
      commonArr.push(ele);
    }
  }
  return commonArr;
}

function remDup(arr) {
  let array = [];
  const firtEle = arr[0];
  for (let ele of arr) {
    if (!array.includes(ele)) {
      array.push(ele);
    }
  }
  return array;
}

//Method-2

function commArr2(arr1, arr2) {
  const setArray1 = new Set(arr1);
  let array = [];
  for (let ele of arr2) {
    if (setArray1.has(ele)) {
      array.push(ele);
    }
  }
  return array;
}

// Method-3
function commArr(arr1, arr2) {
  let array = [];
  for (let ele of arr1) {
    if (arr2.includes(ele) && !array.includes(ele)) {
      array.push(ele);
    }
  }
  return array;
}

console.log(
  commArr([1, 1, 3, 7, 3, 2, 8, 10, 12], [1, 12, 1, 3, 7, 9, 13, 4, 5, 10])
);

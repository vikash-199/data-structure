const objs = [
  { name: "Vikash", age: 28 },
  { name: "Anup", age: 27 },
  { name: "Sunil", age: 29 },
];

const sortByName = (objs) => {
  // let res = objs.sort((a, b) => a.name.localeCompare(b.name));
  let res = objs.sort((a, b) => a.name.localeCompare(b.name));
  return res;
};
console.log(sortByName(objs));

//Number sorting

const nums = [6, 9, 10, 3, 5];

function sortNumber(nums) {
  let res = nums.sort((a, b) => a - b);
  return res;
}

console.log(sortNumber(nums));

function sortNum(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
    return nums;
  }
}

console.log(sortNum(nums));

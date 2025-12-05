let phoneNums = [
  "801-766-9754",
  "801-545-5454",
  "435-678-3453",
  "456-456-0909",
  "234-765-801",
  "801-345-9898",
];

let regexp1 = /801-/;

// let newArr = phoneNums.filter((n) => regexp1.test(n));
let res = [];

for (let ele of phoneNums) {
  if (regexp1.test(ele)) {
    res.push(ele);
  }
}

console.log(res);

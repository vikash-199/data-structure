let regexp = /(\w+), (\w+)/;

// console.log(regexp.exec("Vikash, Singh"));
//output
/*
[
  'Vikash, Singh',
  'Vikash',
  'Singh',
  index: 0,
  input: 'Vikash, Singh',
  groups: undefined
]
*/

let data = ["Vikash, Singh", "Anup, Singh", "Sunil, Gupta"];

let r = /(\w+), (\w+)/;

let newArry = data.map((ele) => {
  let s = r.exec(ele);
  return s[2] + " " + s[1];
});

console.log(newArry);

let newArr = data.map((ele) => {
  let arr = regexp.exec(ele);
  if (arr !== null) {
    return arr[2] + " " + arr[1];
  } else {
    return null;
  }
});

// single group ()
let str = "My phone number is 9876543210 and 7876863883";
let regex = /(\d{10})/;

let match = str.match(regex);
console.log(match);

// multiple capchering group
let date = "20-05-2025";
let regexp1 = /(\d{2})-(\d{2})-(\d{4})/;

let res = regexp1.exec(date);

console.log(res);

// name swape
let name = "Vikash Singh";
let r = /(\w+)\s(\w+)/;

let result = name.replace(r, "$2, $1");
console.log(result);

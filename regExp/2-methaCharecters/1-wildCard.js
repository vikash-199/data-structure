let str = "how are you your name is vikash";

let regExp = /y.u/g;
let regexp2 = /y\o/g;
let regexp3 = /yo/g;

console.log(str.match(regExp));

console.log(str.match(regexp2));
console.log(str.match(regexp3));

let str = "my name is vikash ands i amS from buhar";

let reg = new RegExp("s ", "gi");
let regexp = /s\s/gi; // 's '

console.log(str.match(reg));

let s = "what is your name this is Smy final question";
let regExp = new RegExp("s");
let regExp0 = /s/gi;

console.log(regExp.test(s));
// console.log(regExp0.exec(s));

console.log(s.match(regExp0));
console.log(s.search(regExp));
console.log(s.split(regExp));
console.log(s.replace(regExp0, "x"));

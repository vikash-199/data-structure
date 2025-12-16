// 0 or more
let regexp1 = /ab*c/g;

let str = "abc ac ab abbbbc acd";
console.log(str.match(regexp1)); // [ 'abc', 'ac', 'abbbbc', 'ac' ]

// one or more

let regexp2 = /ab+c/g;

console.log(str.match(regexp2)); // [ 'abc', 'abbbbc' ]

// 🔹 ? → 0 or 1 time (optional)

let regexp3 = /colou?r/g;
let str3 = "color colour color colours";

console.log(str3.match(regexp3));

// exactly n times

let regexp4 = /\d{4}/g;
let regexp5 = /\d{4,}/g;

let str4 = "8765 9877970 778208 76";
console.log(str4.match(regexp4)); //[ '8765', '9877', '7782' ]
console.log(str4.match(regexp5)); //[ '8765', '9877970', '778208' ]

// phone number
let r6 = /^9[0-9]{9}$/;

let s6 = "9972868253";

console.log(s6.match(r6));

let str = "<b>Hello</b><b>World</b>";

let r = /<b>.*<\/b>/; // greedy
let r1 = /<b>.*?<\/b>/g; //lazy

console.log(str.match(r)); //   '<b>Hello</b><b>World</b>',

console.log(str.match(r1)); //[ '<b>Hello</b>', '<b>World</b>' ]

// lazy vs greedy

let s = "aaaaa";
let greedy = /a+/;
let lazy = /a+?/;

console.log(s.match(greedy)); // greedy
console.log(s.match(lazy));

// lazy prefered 0 matching first
let l = /colou??r/g; // first prefer to not match u
let l2 = /colou?r/g;
console.log("color colour".match(l));
console.log("color colour".match(l2));

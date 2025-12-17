let str = "category scatter cat";

let regex = /\bcat\b/g;

console.log(str.match(regex)); // ['cat']

//✅ Example 3: Match cat only when it is inside a word
let r = /\Bcat\B/g;

console.log(str.match(r));

//✅ Find partial word matches
let regex1 = /\Bing/g;
let s = "finding playing ing";
console.log(s.match(regex1));

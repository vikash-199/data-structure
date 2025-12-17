// positive lookahead (?=..)

let s =
  "The marsket value of this product is 100$ but after discount you will get it 88$";

let r = /\d+(?=\$)/g;
console.log(s.match(r));

// domain name check

console.log("google.com yahoo.in".match(/\w+(?=\.com)/g));

// Negative lookahead

let text = "cat can car cap";
console.log(text.match(/ca(?!t)/g));

// positive lookahead

let text1 = "$100 €200 ₹300";

console.log(text1.match(/(?<=\$)\d+/g));

// negative lookbehind

let text2 = "apple #apple banana";

console.log(text2.match(/(?<!#)apple/g)); // apple

// combine example

// Password must contain digit but NOT start with digit
let password = "abc1";

console.log(/^(?!\d)\w+(?=\d)/.test(password));

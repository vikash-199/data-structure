let str = "there are 59 items for a price of $199 or $173";
let regexp = /(?<=\$)\d+/g;

console.log(str.match(regexp));

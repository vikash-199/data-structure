let str = "<strong> This is a strong tag</strong><i>This is a italic tag</i>";

// let regexp = /<(\w+)>.*?<\/\1>/g;
let regexp = /<(\w+>)[\w\s]+<\/\1/g;

console.log(str.match(regexp));

// ex 2-
let str2 = "google.com/profile";
let regexp2 = /\w+(?=\.com)/g;

console.log(str2.match(regexp2));

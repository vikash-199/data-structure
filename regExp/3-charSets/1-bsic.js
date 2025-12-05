let str = "this c1olor is gra5y or gre3y";

let regexp = /gr[ae]y/g;

console.log(str.match(regexp));

let regexp1 = /[abcde][12345]/g;

console.log(str.match(regexp1));

let regexp3 = /[0-9]/g;
let regexp4 = /[a-z@]/gi;

let password = "VikashKumar@1997";

console.log(parseInt(password.match(regexp3).join("")));
console.log(password.match(regexp4).join(""));

let regexp5 = /[12-20]/g;

let s1 = "128797";

console.log(s1.match(regexp5));

let regexp6 = /[^0-9][a-z]/gi;

let pass = "vikashKumar@1997";

console.log(pass.match(regexp6).join(""));

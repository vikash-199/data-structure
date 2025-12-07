// validate email

let regexp = /^[\w-.]+@\w+\.\w{2,3}$/;

let email = "vikash_@outlook.com";

console.log(regexp.test(email));

// validate phone number

let regphone = /^\d{10}$/;

let phoneNumber = "8768608778";

console.log(regphone.test(phoneNumber));

//check if string only contains latters

let regLatters = /^[a-zA-Z]+$/;

let latter = "my name is vikash and i am from bihar born on 11 nov 1996";

console.log(regLatters.test(latter));

//✔ Validate a strong password (8+ chars)
let reg = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

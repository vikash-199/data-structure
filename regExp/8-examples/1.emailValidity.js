let str = "vikash@gmail.com";
// let regexp = /^\w+@\w+\.\w{2,3}$/;
let regexp = /^[^\s@]+@[^\s@]$/;

console.log(str.match(regexp));

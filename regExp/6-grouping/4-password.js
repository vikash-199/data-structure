let regexp = /^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/;
//if pass dose not have numbers then regex (?!.*[0-9])

let pass = "Vikash@1997";

console.log(regexp.test(pass));

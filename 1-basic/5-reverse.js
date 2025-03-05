//Method-1
function rev(str) {
  return str.split("").reverse().join("");
}
//Method-2
function rev1(str) {
  return str.split("").reduce((acc, char) => char + acc);
}

//Method-1
function rev2(str) {
  let rev = "";
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

console.log(rev2("vikash"));

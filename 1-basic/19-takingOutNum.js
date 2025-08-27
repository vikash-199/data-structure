function takingOutNumber(password) {
  let res = "";
  for (let char of password) {
    if (!isNaN(char) && char !== " ") {
      res += char;
    }
  }
  return res;
}
console.log(takingOutNumber("Vikash@1997"));

const outNum = (str) => {
  let res = "";
  for (let char of str) {
    if (!isNaN(char) && char !== " ") {
      res += char;
    }
  }
  return res;
};
console.log(outNum("vikash@gmail1.com"));

const takeNumber = (str) => {
  let res = "";
  for (let char of str) {
    if (!isNaN(char) && char !== " ") {
      res += char;
    }
  }
  return res;
};
console.log("Hello");
console.log(takeNumber("vikash19971@gmail.com"));

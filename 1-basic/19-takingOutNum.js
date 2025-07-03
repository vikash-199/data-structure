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

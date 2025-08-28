// Password validator

function validatePassword(str) {
  const isLengthValid = str.length > 8;

  //   const hasUppercase = /[A-Z]/.test(str);
  const hasUpperCase = str
    .split("")
    .some((char) => char === char.toUpperCase() && char !== char.toLowerCase());

  const hasLowerCase = str
    .split("")
    .some((char) => char === char.toLowerCase() && char !== char.toUpperCase());

  const hasDigit = str.split("").some((char) => !isNaN(parseInt(char, 10)));

  return isLengthValid && hasUpperCase && hasDigit && hasLowerCase;
}

console.log(validatePassword("ika7sh@gmail.com"));

const validPass = (pass) => {
  let lengthValid = pass.length >= 8;
  let validUpperCase = pass.split("").some((ele) => ele === ele.toUpperCase());

  let lowerCase = pass.split("").some((ele) => ele === ele.toLowerCase());

  let numberContains = pass.split("").some((ele) => !isNaN(parseInt(ele, 10)));

  return lengthValid && validUpperCase && lowerCase && numberContains;
};
console.log(validPass("ika7sh@gmail.com"));

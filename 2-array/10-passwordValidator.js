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

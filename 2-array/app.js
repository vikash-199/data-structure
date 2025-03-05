// Method-1
function validatePassword(str) {
  const chars = str.split("");
  const hasUpperCase = chars.some((char) => /[A-Z]/.test(char));
  const hasLowerCase = chars.some((char) => /[a-z]/.test(char));
  const hasNumber = chars.some((char) => !isNaN(char) && char !== " ");
  const hasSpecial = chars.some((char) => /[!@#$%^&*(),.?{}|<>]/.test(char));
  return {
    hasLowerCase,
    hasUpperCase,
    hasSpecial,
    hasNumber,
  };
}

function validatePassword1(str) {
  const chars = str.split("");
  const isLengthValid = chars.length;
  const hasUpperCase = chars.some(
    (char) => char === char.toUpperCase() && char !== char.ToLowerCase()
  );
  const hasLowerCase = chars.some(
    (char) => char === char.toLowerCase() && char !== char.toUpperCase()
  );
  const hasDigit = chars.some(
    (char) => !isNaN(parseInt(char, 10)) && char !== " "
  );
}
console.log(validatePassword("hsomlAasjd@1"));

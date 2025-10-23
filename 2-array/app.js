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

let a = [1, 7, 3, 4];
const sortA = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
console.log(sortA(a));

console.log(a.sort((a, b) => ));

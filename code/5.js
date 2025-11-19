// function rem(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(rem([1, 1, 1, 2]));

function count(str) {
  let charObj = {};
  let countMaxChar = 0;
  let maxUsedChar = "";
  for (let char of str.toLowerCase()) {
    if (char === " ") continue;
    if (charObj[char]) {
      charObj[char]++;
    } else {
      charObj[char] = 1;
    }

    if (charObj[char] > countMaxChar) {
      countMaxChar = charObj[char];
      maxUsedChar = char;
    }
  }

  return { maxUsedChar, countMaxChar };
}

console.log(count("My name is viksash"));

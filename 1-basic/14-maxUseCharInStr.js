function charCountInStr(str) {
  const charCount = {};
  let count = 0;
  let maxUseChar = "";
  for (let char of str.toLowerCase()) {
    if (charCount[char]) {
      charCount[char]++;
      if (charCount[char] > count) {
        count = charCount[char];
      }
    } else {
      charCount[char] = 1;
    }
    maxUseChar = char;
  }
  return { maxUseChar, count };
}

console.log(charCountInStr("charCountInString"));

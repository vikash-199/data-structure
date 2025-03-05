function uniqueStr(str) {
  const charCount = {};

  for (let char of str.toLowerCase()) {
    if (charCount[char]) {
      return false;
    } else {
      charCount[char] = true;
    }
  }
  return true;
}

console.log(uniqueStr("vikash"));

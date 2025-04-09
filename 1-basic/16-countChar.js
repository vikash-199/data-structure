function charCount(str) {
  let res = {};
  for (let char of str.toLowerCase()) {
    if (char === "v") continue;
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
  return res;
}
console.log(charCount("Vikash"));

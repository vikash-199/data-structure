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

function count(str) {
  let res = {};
  for (let char of str) {
    if (res[char]) {
      res[char]++;
    } else {
      res[char] = 1;
    }
  }
  return res;
}
console.log(count("vikashhh"));

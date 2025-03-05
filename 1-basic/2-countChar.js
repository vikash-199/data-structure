//Method-1
function countChar(str, char) {
  let count = 0;
  for (let ele of str) {
    if (ele === char) {
      count++;
    }
  }
  return count;
}

// Method-2
function countChar1(str, char) {
  return str.split(char).length - 1;
}

console.log(countChar("my name is vikash", "a"));

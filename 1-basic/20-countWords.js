function countWords(str) {
  let res = {};
  let words = str.toLowerCase().split(" ");
  for (let word of words) {
    if (res[word]) {
      res[word]++;
    } else {
      res[word] = 1;
    }
  }
  return res;
}
console.log(countWords("How are you my name is Vikash"));

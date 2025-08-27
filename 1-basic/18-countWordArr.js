//Count how many words in sentance for each word

function countWord(str) {
  let arr = str.toLowerCase().split(" ");
  let res = {};
  for (let ele of arr) {
    if (res[ele]) {
      res[ele]++;
    } else {
      res[ele] = 1;
    }
  }
  return res;
}

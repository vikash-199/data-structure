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

const count = (str) => {
  let words = str.toLowerCase().split(" ");
  let res = {};
  for (let word of words) {
    if (res[word]) {
      res[word]++;
    } else {
      res[word] = 1;
    }
  }
  return res;
};

console.log(
  count("My name is vikash and i am fron Bihar that is all about me")
);

// Method-1

function anagrams(str1, str2) {
  const freCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(freCount1);
  const freCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  console.log(freCount2);

  return Object.keys(freCount1).every(
    (char) => freCount1[char] === freCount2[char]
  );
}

console.log(anagrams("vikash is best", "shvika isbest"));

Method - 2;

function charCounter(str) {
  let res = {};
  str = str.toLowerCase();
  let chars = str.split("");
  for (let c of chars) {
    if (res[c]) {
      res[c]++;
    } else {
      res[c] = 1;
    }
  }
  return res;
}

function anagrams(str1, str2) {
  let obj1 = charCounter(str1);
  let obj2 = charCounter(str2);
  return Object.keys(obj1).every((char) => obj1[char] === obj2[char]);
}

console.log(anagrams("Hello", "olleeh"));

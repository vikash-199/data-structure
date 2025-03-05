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

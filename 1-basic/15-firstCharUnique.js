function firstCharUnique(str) {
  const charCollectionObject = {};
  for (let char of str.toLowerCase()) {
    if (charCollectionObject[char]) {
      charCollectionObject[char]++;
    } else {
      charCollectionObject[char] = 1;
    }
  }
  for (let ele of str) {
    if (charCollectionObject[ele] === 1) {
      return ele;
    }
  }
}
console.log(firstCharUnique("my anme is vikash"));

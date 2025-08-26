const maxUserChar = (str) => {
  let count = 0;
  let maxUseChar = "";
  let resObj = {};
  for (let ele of str.toLowerCase()) {
    if (resObj[ele]) {
      resObj[ele]++;
    } else {
      resObj[ele] = 1;
    }

    if (resObj[ele] > count) {
      count = resObj[ele];
      maxUseChar = ele;
    }
  }
  return { maxUseChar, count };
};

console.log(maxUserChar("mynameisvikashi"));

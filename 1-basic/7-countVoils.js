function countVoils(str) {
  let count = 0;
  // const v = ["a", "e", "i", "o", "u"];
  const v = "aeiou";
  for (let char of str.toLowerCase()) {
    if (v.includes(char)) {
      count++;
    }
  }
  return count;
}

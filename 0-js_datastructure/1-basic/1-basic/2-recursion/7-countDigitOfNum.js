function countDigitOfANum(n) {
  if (n === 0) return 0;

  return 1 + countDigitOfANum(Math.floor(n / 10));
}

console.log(countDigitOfANum(123));

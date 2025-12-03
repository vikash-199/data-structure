function printA(a, b) {
  if (b === 0) return 1;

  return a * printA(a, b - 1);
}
console.log(printA(2, 3));

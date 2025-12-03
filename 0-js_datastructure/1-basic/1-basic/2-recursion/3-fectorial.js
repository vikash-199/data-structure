function fec(n) {
  if (n === 1) return 1;

  return n * fec(n - 1);
}

console.log(fec(5));

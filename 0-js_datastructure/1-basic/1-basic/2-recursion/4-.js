function printA(n) {
  if (n === 0) return;

  printA(n - 1);
  console.log(n);
}

printA(5);

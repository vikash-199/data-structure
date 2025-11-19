function countUp(n) {
  //base case
  if (n === 0) return;

  countUp(n - 1);
  console.log(n);
}
countUp(5);

function countDown(n) {
  //base case
  if (n === 0) return;

  console.log(n);

  //rec
  countDown(n - 1);
}

countDown(5);

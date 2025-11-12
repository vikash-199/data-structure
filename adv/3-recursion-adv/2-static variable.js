let x = 0;

function fun(n) {
  if (n > 0) {
    x++;
    return fun(n - 1) + x;
  }
  return 0;
}

console.log(fun(5));

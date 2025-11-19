function calculater(a, b, oprator) {
  let res = 0;
  switch (oprator) {
    case "add":
      res = a + b;
      break;
    case "sub":
      res = a - b;
      break;
    default:
      throw new Error("Invalid oprator");
  }
  return res;
}

console.log(calculater(10, 5, "add"));

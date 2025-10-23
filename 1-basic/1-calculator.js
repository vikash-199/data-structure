function cal(a, b, oprator) {
  let result;

  switch (oprator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      throw new Error("Invalid oprator");
  }
  return result;
}

console.log(cal(5, 2, "*"));

const calcaulatorVikash = (a, b, oprator) => {
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
};

console.log(calcaulatorVikash(10, 5, "sub"));

const ca = (a, b, oprator) => {
  let res = 0;
  switch (oprator) {
    case "add":
      res = a + b;
      break;
    case "sub":
      res = a - b;
      break;
    case "mul":
      res = a * b;
      break;
    default:
      throw new Error("Invalid errror");
  }
  return res;
};
console.log(ca(10, 5, "sub"));

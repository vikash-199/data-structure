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

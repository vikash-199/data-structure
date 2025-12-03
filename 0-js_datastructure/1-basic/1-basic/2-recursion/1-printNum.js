function revPrint(num) {
  if (num <= 0) {
    console.log("all done");
    return;
  }

  revPrint(num - 1);
  console.log(num);
}

console.log(revPrint(5));

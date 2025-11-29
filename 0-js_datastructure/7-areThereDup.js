function areThereDuplicates() {
  let fc = {};

  for (let ele of arguments) {
    fc[arguments[ele]] ? fc[arguments[ele]]++ : (fc[arguments[ele]] = 1);
  }
  for (let key in fc) {
    if (fc[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 34.4, 1));

function findMissingChar(arr) {
  let start = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i].charCodeAt(0);
    if (current - start > 1) {
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}

console.log(findMissingChar(["a", "b", "d"]));

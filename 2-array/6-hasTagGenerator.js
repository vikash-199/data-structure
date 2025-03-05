function hasTagGenerator(str) {
  if (str.length > 140 || str.length === 0) {
    return false;
  }
  const updatededStr = str.split(" ").reduce((acc, word) => {
    acc = acc + word[0].toUpperCase() + word.slice(1);
    return acc;
  }, "");
  return `#${updatededStr}`;
}

console.log(hasTagGenerator("app"));

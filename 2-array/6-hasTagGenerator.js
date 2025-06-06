// method 1
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

console.log(hasTagGenerator("app is my"));

// method 2

function hasTagGenerator(str) {
  let arr = str.split(" ");
  let res = arr.map((word) => word[0].toUpperCase() + word.slice(1)).join("");
  return `#${res}`;
}
console.log(hasTagGenerator("My name is vikash"));

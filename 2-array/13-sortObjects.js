let users = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

function bubbleSortByName(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j].name > arr[j + 1].name) {
        // swap objects
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSortByName(users));

function sortName(users) {
  let res = users.sort((a, b) => a.name.localeCompare(b.name));
  return res;
}
console.log(sortName(users));

const sortObj = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].name > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], [arr[j]]];
      }
    }
  }
  return arr;
};
console.log(sortObj(users));

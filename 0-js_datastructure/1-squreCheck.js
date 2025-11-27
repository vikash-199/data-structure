/*
slice():-
➤ Purpose:

To copy a portion of the array without changing the original array.

➤ Returns:

A new array.

➤ Original array:

NOT modified ❌

Example 1:-
const nums = [10, 20, 30, 40, 50];
const result = nums.slice(1, 4);

console.log(result); // [20, 30, 40]
console.log(nums);   // [10, 20, 30, 40, 50]  (unchanged)

Ex 2:-
const arr = ["a", "b", "c", "d"];
console.log(arr.slice(2));  //["c", "d"]

Ex3:-
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(-2)); // [4, 5]  last 2 elements


splice():-

✅ 2. splice()
➤ Purpose:

To add, remove, or replace elements in the array.

➤ Returns:

A new array containing removed elements.

➤ Original array:

IS modified ✔


Ex1: Removing ele

const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);

console.log(removed); // [2, 3]
console.log(arr);     // [1, 4, 5]  (changed)


Ex2:- Adding ele

const arr = ["a", "b", "d"];
arr.splice(2, 0, "c"); 

console.log(arr); // ["a", "b", "c", "d"]

Ex3:- Replacing ele

const arr = [10, 20, 30, 40];
arr.splice(1, 2, 99, 100);

console.log(arr); // [10, 99, 100, 40]




*/

// write a function that take two arrayes , arr1 = [1,2,3,1],arr2=[4,9,1,1] basically arr2 contain arr1 all ele squre even duplicate ele

// method 1 O(n^2)
function squireCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let indexOfEle = arr2.indexOf(arr1[i] ** 2);
    if (indexOfEle === -1) {
      return false;
    }
    arr2.splice(indexOfEle, 1);
  }
  return true;
}
console.log(squireCheck([1, 1, 2, 3], [1, 9, 1, 4]));

//method 2 O(n)

function m2(arr1, arr2) {
  let fc1 = {};
  let fc2 = {};
  for (let ele of arr1) {
    fc1[ele] = (fc1[ele] || 0) + 1;
  }
  for (let ele of arr2) {
    fc2[ele] = (fc2[ele] || 0) + 1;
  }
  for (let key in fc1) {
    if (!(key ** 2 in fc2)) {
      return false;
    }
    if (fc2[key ** 2] !== fc1[key]) {
      return false;
    }
  }
  return true;
}
console.log(m2([1, 1, 2, 3], [1, 9, 1, 4]));

function sum(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};
  if (arr1.length !== arr2.length) return false;

  for (let ele of arr1) {
    obj1[ele] = (obj1[ele] || 0) + 1;
  }
  for (let ele of arr2) {
    obj2[ele] = (obj2[ele] || 0) + 1;
  }
  console.log(obj1);
  console.log(obj2);
  for (let key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj2[key ** 2] !== obj1[key]) return false;
  }
  return true;
}

console.log(sum([1, 1, 2, 3], [1, 9, 1, 4]));

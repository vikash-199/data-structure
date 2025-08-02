/*
const coutOccr = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
};

console.log(coutOccr("hello", "l"));


const maxNum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

console.log(maxNum([1, 5, 7, 9, 2, 4, 10]));

const firstLatterCap = (str) => {
  return str
    .split(" ")
    .map((ele) => ele[0].toUpperCase() + ele.slice(1))
    .join(" ");
};
console.log(firstLatterCap("hi may name is vikash"));

const firstLatterCap1 = (str) => {
  const words = str.split(" ");
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    arr.push(words[i]);
  }
  return arr.join(" ");
};
console.log(firstLatterCap1("Hello my name is vikash"));


const revString = (str) => {
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }
  return rev;
};
console.log(revString("Vikash"));

const isPalindrome = (str) => {
  const formatedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const revStr = formatedStr.split("").reverse().join("");
  return formatedStr === revStr;
};

console.log(isPalindrome("bad"));


const countVoils = (str) => {
  let count = 0;
  const arr = str.toLowerCase().split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
};

console.log(countVoils("Hello"));


const remDuplicate = (arr) => {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

console.log(remDuplicate(["orange", 1, 5, "orange", 6, 7, 10, 1]));

function uniqueArray(arr) {
  let a = [];
  for (let i = 0; i < arr.length; i++) {
    if (!a.includes(arr[i])) {
      a.push(arr[i]);
    }
  }
  return a;
}
console.log(uniqueArray([1, 1, 3, 5, 6, 6]));
function intersectedEle(arr1, arr2) {
  let arr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return arr;
}

console.log(intersectedEle([1, 2, 3, 4, 5], [5, 6, 7, 8, 9]));

// let arr = [1,2,3,4,5,7,8,9];

function findMissingletter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return "";
}
console.log(findMissingletter(["e", "f", "g", "i", "j"]));

function findMissingletter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return "";
}
console.log(findMissingletter(["e", "f", "g", "i", "j"]));

function findMissingChar(arr) {
  const startChar = arr[0].charCodeAt(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    let currentChar = arr[i];
    if (arr[i].charCodeAt(currentChar) !== startChar + i) {
      return String.fromCharCode(startChar + i);
    }
  }
}
console.log(findMissingChar(["a", "c", "d"]));

function uniqueChar(str) {
  let uniqueStr = [];
  const currentStr = str.split("");
  for (let char of currentStr) {
    if (!uniqueStr.includes(char)) {
      uniqueStr += char;
    }
  }
  return uniqueStr;
}
console.log(uniqueChar("whattttt"));
*/

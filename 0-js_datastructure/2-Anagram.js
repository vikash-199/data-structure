/*
Given two strings str2 is anagram of str1
ex
ana('','') true
ana('aaz','zza') false
ana('anagram','nagaram') true
ana('rat','car') false
*/

function checkAnagram(first, second) {
  let fc = {};
  if (first.length !== second.length) return false;
  for (let char of first) {
    fc[char] ? fc[char]++ : (fc[char] = 1);
  }
  for (let char of second) {
    if (!fc[char]) {
      return false;
    } else {
      fc[char] -= 1;
    }
  }
  return true;
}
console.log(checkAnagram("abd", "dbc"));
function ana(str1, str2) {
  let fc1 = {};
  let fc2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  if (str1 === "" && str2 === "") {
    return true;
  }
  for (let char of str1) {
    fc1[char] = (fc1[char] || 0) + 1;
  }
  for (let char of str2) {
    fc2[char] = (fc2[char] || 0) + 1;
  }
  for (let char in fc1) {
    if (!(char in fc2)) {
      return false;
    }
    if (fc1[char] !== fc2[char]) {
      return false;
    }
  }
  return true;
}
console.log(ana("", ""));

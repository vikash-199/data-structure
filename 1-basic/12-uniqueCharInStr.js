// // Method-1
// function uniqueStr(str) {
//   let uniStr = "";
//   for (let char of str.toLowerCase()) {
//     if (!uniStr.includes(char)) uniStr = uniStr + char;
//   }
//   return uniStr;
// }

// // Method-2
// function uniStr1() {
//   let uniqueString = "";
// }
// console.log(uniqueStr("viikash"));

function uniqueString(str) {
  let u = "";
  for (let char of str.toLowerCase()) {
    if (!u.includes(char)) {
      u += char;
    }
  }
  return u;
}
console.log(uniqueString("vikass"));

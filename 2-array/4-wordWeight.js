// // Method-1
// function maxWordValue(str) {
//   let charvalue = [];
//   const singleWorldValue = str.split(" ");
//   for (let world of singleWorldValue) {
//     let value = 0;
//     for (let char of world) {
//       value = value + char.charCodeAt(0) - 96;
//     }
//     charvalue.push(value);
//   }
//   let max = 0;
//   let index;
//   for (let i = 0; i < charvalue.length; i++) {
//     if (charvalue[i] > max) {
//       max = charvalue[i];
//       index = i;
//     }
//   }
//   return singleWorldValue[index];
// }

// // Method-2
// function maxWordValue1(str) {
//   const words = str.split(" ");

//   const scores = words.map((word) => {
//     return Array.from(word).reduce(
//       (score, letter) => score + letter.charCodeAt(0) - 96,
//       0
//     );
//   });

//   const highestScore = Math.max(...scores);
//   const highestScoreIndex = scores.indexOf(highestScore);

//   return words[highestScoreIndex];
// }
// console.log(maxWordValue1("my nam is vikash"));

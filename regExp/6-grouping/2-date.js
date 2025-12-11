let data = "20-05-2025";

// Correct regex with 3 capturing groups: day, month, year
let regexp = /^(\d{1,2})[\/.-](\d{1,2})[\/.-](\d{4})$/;

let arr = regexp.exec(data);
let day, month, year;

if (arr) {
  day = arr[1];
  month = arr[2];
  year = arr[3];
} else {
  console.log("Wrong format");
}

console.log("Day:", day);
console.log("Month:", month);
console.log("Year:", year);

// date checking regex
let date1 = "14/02/2025";
let date2 = "14.02.2025";

console.log(date2.match(regexp));

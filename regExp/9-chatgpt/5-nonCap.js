let str = "2025-12-17";
let regex = /(\d{4})-(?:\d{2})-(\d{2})/;

let match = str.match(regex);

console.log(match);

console.log(match[1]); //2025
console.log(match[2]); //17

// Example 2: Validate file extensions

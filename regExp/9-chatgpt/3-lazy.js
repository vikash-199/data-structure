// Test string
const str = "colour";

// Greedy optional ?
const greedyRegex = /colou?r/;

// Lazy optional ??
const lazyRegex = /colou??r/;

console.log("String:", str);

console.log("\n--- Greedy ? ---");
console.log("Regex:", greedyRegex);
console.log("Match:", str.match(greedyRegex));

console.log("\n--- Lazy ?? ---");
console.log("Regex:", lazyRegex);
console.log("Match:", str.match(lazyRegex));

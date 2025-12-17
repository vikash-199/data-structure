// ex 1
const regex = /3\+2/;
console.log("3+2".match(regex)); // ✅ [ '3+2' ]

// ex 2

let regex1 = /\.js$/;
console.log("app.js".match(regex1)); // ✅
console.log("appjsx".match(regex1)); // ❌

// 2️⃣ Match a price like ₹100+

console.log("₹1000+ ₹199+".match(/\₹\d+\+/g));

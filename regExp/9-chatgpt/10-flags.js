// 1️⃣ g → Global
const text = "cat dog cat";

const regex1 = /cat/;
const regex2 = /cat/g;

console.log(text.match(regex1)); // ['cat']
console.log(text.match(regex2)); // ['cat', 'cat']

//2️⃣ i → Ignore Case
const text1 = "Hello hELLo HELLO";

console.log(text1.match(/hello/)); // null
console.log(text1.match(/hello/i)); // ['Hello']
console.log(text1.match(/hello/gi)); // ['Hello', 'hELLo', 'HELLO']

//3️⃣ m → Multiline

const text2 = `cat
dog
cat`;

console.log(text2.match(/^cat/g)); // ['cat']
console.log(text2.match(/^cat/gm)); // ['cat', 'cat']

/*
📌 Without m: ^ means start of whole string
📌 With m: ^ means start of each line
*/

//4️⃣ s → DotAll
const t = `Hello
World`;

//👉 Allows . to match newline (\n)
console.log(/Hello.World/.test(t)); // false
console.log(/Hello.World/s.test(t)); // true
/*
📌 Normally . ❌ does NOT match new line
📌 With s → it does ✅
*/

//5️⃣ u → Unicode -👉 Handles Unicode characters correctly (emoji, special letters)
const text3 = "😊";

console.log(/^.$/.test(text3)); // false
console.log(/^.$/u.test(text3)); // true

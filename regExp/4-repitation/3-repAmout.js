/*
🧩 First: What is \w ?

\w = word character
(letters A–Z, a–z, digits 0–9, and underscore _)

Examples of \w:
a, Z, 5, _, f, x, 7
*/

let regexp1 = /\w{3}/g;
/*
1️⃣ Regex: /\w{3}/g
🔹 Meaning:
Match exactly 3 word characters (no more, no less).
✔ Example String:
"hello_123"
✔ Matches:
"hel"
"lo_"
"123"
Remember: it matches in chunks of 3 characters.
🚫 Does NOT match:
"he" (only 2 characters)
*/

let regexp2 = /\w{3,}/g;
/*
2️⃣ Regex: /\w{3,}/g
🔹 Meaning:
Match 3 or more word characters
(Minimum 3, maximum unlimited)
✔ Example String:
"hello_123"
✔ Matches:
"hello_123"
Why?
Because the whole string "hello_123" is one continuous block of word characters (9 characters → valid).
*/

let str =
  "my full name is vikash and i am from Bihar and this is my number - 780-835-2794";
let regexp = /\w{3,5}/;

console.log(str.match(regexp));

/*
3️⃣ Regex: /\w{3,5}/g
🔹 Meaning:
Match between 3 to 5 word characters
(min = 3, max = 5)
✔ Example String:
"hello_123"
✔ Matches:
The regex matches chunks of 3 to 5 characters:
"hello" → 5 characters ✔
"_123" → 4 characters ✔
So output:
["hello", "_123"]
*/

// Examples
let regexp4 = /\d{2}-\d{4,6}/g;
let str2 = ["26-7683", "73-378883", "38-938"];

console.log(str2.filter((str) => str.match(regexp4)));

/*
For the following regular expression, which of the following strings produce a match?

/\d{3}-?\d\d\d-?\d{4,5}/
*/

//check the phone number are in this form nnn-nnn-nnnn,(nnn)-nnn-nnnn,nnn.nnn.nnnn,(nnn)nnn-nnnn

let reg = /\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}/;

let phones = [
  "890-873-3786",
  "(251)6278976",
  "(123)-363-8375",
  "123.756.9876",
  "(165)624-9876",
];

console.log(phones.filter((n) => n.match(reg)));

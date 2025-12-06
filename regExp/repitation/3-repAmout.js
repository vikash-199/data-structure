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

console.log(str.match(regexp));

let regexp = /\w{3,5}/;
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

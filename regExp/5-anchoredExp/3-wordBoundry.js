/*
✅ What is \b in Regex?

\b means word boundary.
A word boundary is the position between:

a word character (a–z, A–Z, 0–9, _)
and

a non-word character (space, punctuation, start/end of string)

\b DOES NOT match a character — it matches a POSITION.

✅ Best Simple Examples
1) Match a word ONLY when it starts

Regex:

\bcat


Matches:
✔ cat in cat house
✔ cat in cat123
❌ does NOT match scat (because c is not at a boundary)

2) Match a word ONLY when it ends

Regex:

cat\b


Matches:
✔ cat in my cat
✔ cat in wildcat? → ❌ NO
✔ cat in I love cat! (before !)

3) Match the whole word exactly (start + end)

Regex:

\bcat\b


Matches ONLY:
✔ cat
✔ the cat is here

Does NOT match:
❌ cats
❌ wildcat
❌ cat123

🧪 Practical Examples (JavaScript)
Example 1 — Find "hello" as a whole word
"hello world".match(/\bhello\b/);  


✔ Match

"sayhello".match(/\bhello\b/);


❌ No match

Example 2 — Match words starting with "un"
"unknown undo fun run".match(/\bun\w+/g);


✔ Output:
["unknown", "undo"]

Example 3 — Match number at start of word
"Room 45A".match(/\b45/);


✔ Matches 45

"X45Y".match(/\b45/);


❌ No match (45 is in middle of a word)
*/

// ex 1

console.log("hello hello word".match(/\bhello\b/g));

// ex 2

console.log("sayhello ".match(/\bhello\b/g));

// ex 3 - Match words starting with "un"

console.log("unknown undo fun run".match(/\bun\w+/g));

//Example 3 — Match number at start of word

console.log("Room 45A V45jo".match(/\b45/g));

/*
| Symbol | Meaning         | Checks         | Works Where            | Example                                           |
| ------ | --------------- | -------------- | ---------------------- | ------------------------------------------------- |
| `\b`   | Word boundary   | Word start/end | Anywhere in the string | `\bcat\b` → matches middle words                  |
| `^`    | Start of string | Beginning only | Start of full string   | `^cat` → only matches if string starts with "cat" |
| `$`    | End of string   | End only       | End of full string     | `cat$` → only matches if string ends with "cat"   |

✔ 3. Clear Examples
Example for \b
Sentence: "My cat is cute"
Regex: \bcat\b  
Match: "cat"


Also works in the middle:

"My cat is cute"
      ↑ boundary

Example for ^
Regex: ^cat
"cat is here" → ✔ match
"my cat is here" → ❌ no match

Example for $
Regex: cat$
"I have a cat" → ✔ match
"I have a cat here" → ❌ no match

*/

// ex 1 -1) Match the word “cat” only if it appears as a whole word.
let str1 = "I have a cat at home";
let regexp1 = /\bcat\b/g;
console.log(str1.match(regexp1));

// ex 2) Match “hello” only if it is at the START of the string.
let str2 = "say hello";
let regexp2 = /^hello/g;

console.log(str2.match(regexp2)); // "say hello" no match

// ex - 3) Match “end” only if it is at the END of the string.
let str3 = "this is the end"; // not match "end of story"

let regexp3 = /end$/g;
console.log(str3.match(regexp3));

// ex- 4) Match any word starting with “un”.

let str4 = "undo unknown fun run";
let regexp4 = /\bun\w+/g;
console.log(str4.match(regexp4));

// ex - 5) Match “java” only as a whole word, case-insensitive.
let str5 = "I like Java and java javascript";
let regexp5 = /\bjava\b/gi;

console.log(str5.match(regexp5));

// ex - 6) Check if the string is ONLY numbers from start to end.

let str6 = "96965";
let regexp6 = /^\d+$/;

console.log(regexp6.test(str6));

// ex 7 - 7) Match any word ending with “ing”.

let str7 = "running jumping king wing";
let regexp7 = /\w+ing\b/g;
console.log(str7.match(regexp7));

/*
8) Match the first word of a sentence.

Regex:

^\b\w+


String:
"Hello world"
✔ Match: Hello

9) Match the last word of a sentence.

Regex:

\w+\b$


String:
"Coding is fun"
✔ Match: fun

10) Match a phone number only if the line STARTS with it.

Formats allowed: 123-456-7890
Regex:

^\d{3}-\d{3}-\d{4}


String:
"123-456-7890 is my number" → ✔
"Call me at 123-456-7890" → ❌ (not at start)
*/

// Non-word char
let str11 = "hivikashis can vikashhi likeme";
let regexp11 = /\Bvikash\B/g;

console.log(str11.match(regexp11));

let str12 = "841503";
let regexp = /^\d{5}$/;

console.log(str12.match(regexp));

// exices
let s =
  "monday is not tuesday and tuesday is not wednesday and thrusday, and friday and saturday and sunday";

let regexp13 = /[a-z]+day\b/gi;
let regexpMoreAccurate = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi;

console.log(s.replace(regexpMoreAccurate, "monday"));

let regexpDay =
  /\bmonday|tuesday|wednesday|thursday|friday|saturday|sunday\b/gi;

console.log(s.replace(regexpDay, "monday"));

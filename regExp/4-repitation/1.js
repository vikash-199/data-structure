/*
1️⃣ + (One or More)

Means:
👉 The pattern must appear at least once (1, 2, 3, ... times).

✔ Example Regex:
/a+/



Matches:

"a"

"aa"

"aaa"

"aaaaa"

Does NOT match:

"" (empty)

"b"

2️⃣ * (Zero or More)

Means:
👉 The pattern may appear 0 or more times (0,1,2,3…).

✔ Example Regex:
/ha*/

/*
Matches:

"h"

"ha"

"haa"

"haaa"
✔ Real Example:
/https*/

/*
Matches both:

"http"

"https"

Because the s can appear 0 or more times.

3️⃣ ? (Zero or One)

Means:
👉 The pattern is optional
It may appear 0 or 1 time, not more.

✔ Example Regex:
/colou?r/


Matches:

"color"

"colour"

Because u is optional.

✔ Real Example:
/Mr?s?\.?/


Matches:

Mr

Mr.

Mrs

Mrs.


🌟 All 3 in One Beautiful Example

Regex:

let regexp=/go+o?gle*/
/*
Breakdown:

g → exact

o+ → one or more o (like “gooooogle”)

o? → optional o

gle* → l must be there, but e can appear 0 or more times

Matches:

"google"

"gooogle"

"gooooogle"

"gogle"

"gooooogleeeee"
*/

let str = "HOW Are you";
let reg = /[A-Z]+/g;

console.log(str.match(reg));

// let reg2 = /[0-9]+/g;
let reg2 = /\d+/g;

let str2 = "78083agh fah 97";

console.log(str2.match(reg2)); // [ '78083', '97' ]

let reg3 = /[s]+/g;
let str3 = "my name is vikash whose profession is to make video";

console.log(str3.match(reg3).join("").length); //6

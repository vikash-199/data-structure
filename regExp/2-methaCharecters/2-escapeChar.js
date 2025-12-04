/*
📘 Table: Backslash Escaping in JavaScript (String + Regex)
What you write (code)	Meaning	Actual value (result)	Example Usage
\n	newline	new line	"Hello\nWorld" → prints in 2 lines
\t	tab	tab space	"A\tB" → A B
\\	one backslash	\	"C:\\path" → C:\path
\d (regex)	digit	matches 0–9	/\d/.test("8") → true
\w (regex)	word char (A-Z, a-z, 0-9, _)	matches one word char	/\w/.test("_") → true
\s (regex)	whitespace	space/tab/newline	/\s/.test(" ") → true
y\\o (regex)	match literal y\o	matches "y\o"	str = "y\\o" → /y\\o/.test(str) → true
\o	❌ invalid escape	treated as "o"	/y\o/ matches "yo"
*/

// new line
console.log("New line ex");

console.log("hello\nWord");

// tab \t
console.log("Tab ex");

console.log("A\tB");

// \\ - one literal backslash

console.log("c:\\folder");

// \d digit
console.log(/\d/.test("8")); // true
console.log(/\d/.test("A")); // false

//✅ 5. \w — Word character (Regex) (A–Z, a–z, 0–9, _)
console.log(/\w/.test("A")); // true
console.log(/\w/.test("_")); // true
console.log(/\w/.test("@")); // false

//✅ 6. \s — Whitespace (Regex) (space, tab, newline)
console.log(/\s/.test(" ")); // true
console.log(/\s/.test("\t")); // true
console.log(/\s/.test("A")); // false

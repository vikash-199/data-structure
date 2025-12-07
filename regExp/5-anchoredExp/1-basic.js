/*
1️⃣ ^ — Start Anchor
^ ensures the match must start at the beginning of the string.
✔ Example
Regex:
/^Hello/

Matches ONLY if the string starts with “Hello”.
String	Match?	Why
"Hello World"	✅ Yes	Starts with "Hello"
"Say Hello"	❌ No	"Hello" is not at the start

2️⃣ $ — End Anchor
$ ensures the match must end at the end of the string.
✔ Example
Regex:
World$
Matches ONLY if the string ends with “World”.
String	Match?	Why
"Hello World"	✅ Yes	Ends with "World"
"World Hello"	❌ No	"World" is not at the end
3️⃣ Combining Anchors (^…$)
*/

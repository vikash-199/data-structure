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
This means the entire string must match exactly.
✔ Example
Regex:
^\d{3}$
Matches ONLY if the string is exactly 3 digits.

String	Match?
"123"	✅
"12"	❌
"1234"	❌
"abc123"	❌

4️⃣ Anchored vs Unanchored Comparison
Unanchored
\d{3}

Matches any 3 digits anywhere.
String	Matches
"A123B"	123
"4512"	451, 512
Anchored
^\d{3}$

Matches only exact 3-digit string.
String	Matches
"123"	123
"A123B"	❌
"4512"	❌
*/

//Email validator
/*
ere is a simple, clear explanation of the regex:

✔ Regular Expression
^[\w.-]+@\w+\.\w{2,3}$


Let’s break it down piece by piece:

🔍 1. ^

Means start of the string

Ensures matching begins from the first character.

🔍 2. [\w.-]+

A character class that allows:

\w → word characters (A–Z, a–z, 0–9, _)

. → literal dot

- → hyphen

+ means one or more of these characters.

This represents the email username (before @).

✔ Examples allowed:

vikash
vikash.singh
vikash-singh
vikash_123


🔍 3. @

A literal @ symbol

Required in every email.

🔍 4. \w+

One or more word characters.

Represents the domain name (like gmail, yahoo, outlook).

✔ Examples allowed:

gmail
yahoo
outlook
my-domain123  ❌ (not allowed because hyphen not included)

🔍 5. \.\w{2,3}

\. → literal dot .

\w{2,3} → 2 or 3 word characters

This represents the top-level domain (TLD)

✔ Examples allowed:

.com
.net
.in
.org


❌ Not allowed:

.co.in        (because only one dot allowed)
.email        (5 letters—regex allows max 3)

🔍 6. $

End of the string

Ensures nothing comes after the TLD.

✔ What this regex validates (simple)

This pattern validates simple email formats, like:

✔ Valid

test@gmail.com
vikash.singh@yahoo.in ❌ (not allowed because ".in" is okay but ".yahoo.in" has two dots after domain)
john-doe@abc.org
my_email@server.net


❌ Invalid

test@domain.co.in     (regex doesn’t allow 2 dots)
my email@gmail.com     (spaces not allowed)
test@domain            (no TLD)
test@domain.comm       (TLD > 3 characters)
*/

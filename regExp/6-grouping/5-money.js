let str = "there are 59 items for a price of $199 or $173";
let regexp = /(?<=\$)\d+/g;

console.log(str.match(regexp));

let regexp2 = /^8|^3|1$/; // all true 84321-0098,4321,32118,084321

/*
/^(8|3|1)$/
This means:

^ → start of string

(8|3|1) → the string must be exactly either:

"8"

"3"

"1"

$ → end of string

✔ So it matches ONLY single-character strings that are exactly 8, 3, or 1.


Here is the simplest possible explanation of
?, ?=, ?:, and ?! in regex, with clear examples 👇

✅ 1. ? — Quantifier (Optional)

? after a character means:

The previous character is optional (0 or 1 time)

Example:
colou?r


Matches:

color ✔

colour ✔

Because u is optional.

✅ 2. ?= — Positive Look-Ahead

(?=...) checks:

Something must come AFTER the current position.

It does NOT consume characters (it just checks).

Example:
\d+(?=USD)


Matches:

100 in 100USD ✔

but NOT 100 in USD100 ❌

Because the number must be followed by USD.

✅ 3. ?: — Non-capturing Group

(?:...) is just a group but it does NOT save (capture) the result.

Used for grouping without creating a capturing group.

Example:
(?:abc)+


Matches:

abc

abcabc

abcabcabc

But it does not capture “abc” in a group.

❗ Why use non-capturing groups?

Compare:

(abc)+   → captures “abc”
(?:abc)+ → does NOT capture


Useful when you don't want extra groups in match() results.

✅ 4. ?! — Negative Look-Ahead

(?!...) checks:

Something must NOT come after the current position.

Example:
\d+(?!USD)


Matches:

100 in 100EUR ✔

but NOT 100 in 100USD ❌

Because the number must not be followed by "USD".

*/

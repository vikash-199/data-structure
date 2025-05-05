function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}

/*
Example: reverseString("abc")
Call stack:

reverseString("abc")
→ reverseString("bc") + "a"

reverseString("bc")
→ reverseString("c") + "b"

reverseString("c")
→ reverseString("") + "c"

reverseString("")
→ ""

Now it "unwinds":

"" + "c" → "c"

"c" + "b" → "cb"

"cb" + "a" → "cba"

*/

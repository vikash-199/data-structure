/*
✅ Problem Statement: Construct a Message From Given Letters (Frequency Counter)

You are given two strings:

message → the text you want to create

letters → the pool of characters available to you

Your task is to determine whether the message can be constructed using only the characters provided in letters.

Rules & Requirements:

Each character in letters can be used only as many times as it appears.

The function should return:

true → if the message can be formed

false → if the message cannot be formed

You must solve the problem using the Frequency Counter pattern.

Consider case-sensitivity (e.g., 'A' and 'a' are different characters).

Inputs will be strings consisting of any characters (letters, punctuation, etc.).

| message    | letters    | Output  | Explanation                             |
| ---------- | ---------- | ------- | --------------------------------------- |
| `"aabbcc"` | `"abcabc"` | `true`  | Both contain each character twice       |
| `"hello"`  | `"hleol"`  | `true`  | Letters match exactly after rearranging |
| `"note"`   | `"ton"`    | `false` | Missing `"e"`                           |
| `"aa"`     | `"ab"`     | `false` | Only one `"a"` available                |

*/

function constructMessage(message, latters) {
  let fcm = {};
  let fcl = {};

  for (let char of message) {
    fcm[char] ? fcm[char]++ : (fcm[char] = 1);
  }
  for (let char of latters) {
    fcl[char] ? fcl[char]++ : (fcl[char] = 1);
  }

  for (let key in fcm) {
    if (!fcl[key]) return false;
    if (fcm[key] > fcl[key]) return false;
  }
  return true;
}

console.log(constructMessage("hello", "olehh"));

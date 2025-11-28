/*
📝 Problem Statement: sameFrequency

You are given two positive integers. Your task is to determine whether both numbers contain the same frequency of digits.

In other words, the function should return:

true → if both numbers use the exact same digits the same number of times, regardless of order

false → otherwise

Example

Input: 182, 281
Output: true
Explanation: Both contain one 1, one 8, and one 2.

Input: 34, 14
Output: false
Explanation: Digits differ.

Input: 3589578, 5879385
Output: true

Constraints

The numbers must be compared digit by digit.

No sorting is allowed (solve using frequency counting).

Time complexity should ideally be O(n).

Your Goal

Write a function sameFrequency(num1, num2) that returns true if both integers have the same digit frequency, and false otherwise.
*/

function freqCounter(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  let fc1 = {};
  let fc2 = {};

  for (let char of str1) {
    fc1[char] ? fc1[char]++ : (fc1[char] = 1);
  }
  for (let char of str2) {
    fc2[char] ? fc2[char]++ : (fc2[char] = 1);
  }

  for (let key in fc1) {
    if (fc1[key] !== fc2[key]) return false;
  }
  return true;
}

console.log(freqCounter(123, 341));

/*
✅ Problem Statement: Find All Duplicate Numbers (Using Set)

You are given an array of integers nums.
Your task is to return all the numbers that appear more than once in the array.

Rules & Requirements:

Return an array containing only the duplicates.

Each duplicate number should appear only once in the result, even if it appears multiple times in the input.

The order of duplicates should match the order in which they are found.

Use an efficient approach (e.g., Set or Frequency Counter).

🔍 Examples
Example 1

Input:
[1, 2, 3, 2, 4, 5, 3]

Output:
[2, 3]

Explanation:

2 appears twice

3 appears twice

Example 2

Input:
[4, 5, 6, 7]

Output:
[]
(No duplicates)
*/
function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i]);
  }
  return ans;
}

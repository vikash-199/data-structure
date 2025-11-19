/*
🧠 What is Recursion?

Recursion is when a function calls itself until it reaches a stopping point (called base case).

👉 Think of recursion like:

- A mirror facing another mirror

- Or you calling yourself repeatedly but stopping when a condition is met

- Or breaking a big problem into small repeated pieces

✔️ 1. Base Case (Stopping Condition)

If no base case → recursion will continue forever → ⚠️ stack overflow.

✔️ 2. Recursive Call (Function calls itself with smaller input)
Format:

function recurse(n) {
  if (n === 0) return;  // base case
  recurse(n - 1);       // recursive step
}

🔥 Why Use Recursion?

Some problems are naturally recursive:

- Tree/Graph traversal

- Nested objects/arrays

- Factorial

- Fibonacci

- Searching inside folders (like system)

- Breaking problems into smaller same-shaped tasks

*/

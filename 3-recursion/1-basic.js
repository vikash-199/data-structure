/*
Recursion :- A fn that calls itself untill a base case is true and in most recursive funtions, we breack the problem down into smaller instance and then use that solution to sove the orignal problem

- when we call a fn , it gets added to what we call a call stck

      Recursion                       
- A fn calls itself to sove a smaller 
version of the same problem

- New instance gets added to call stack every time it is called
- Recursion can minimize the amount of code needed and is often more elegant


Itration

- A block of code is called untill a condition is met
- Itration dose not add funtions to the call stck, so it is memory efficient



*/

function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log("All done!");
    return;
  }

  // Recursive Case
  console.log(num);
  num--;
  countDown(num);
}

countDown(10);

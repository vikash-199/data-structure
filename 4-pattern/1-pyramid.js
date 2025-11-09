// right angle trigle
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log("* ".repeat(i));
}

function pat(n) {
  for (let i = 1; i <= n; i++) {
    console.log("* ".repeat(i));
  }
}

pat(3);

//inverse right angle trigle
function p2(n) {
  for (let i = n; i >= 1; i--) {
    console.log("* ".repeat(i));
  }
}

p2(5);

//pyramid pattern
/*
    *
   * *
  * * *
 * * * *
* * * * *

*/
function p3(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}
p3(5);

/*

* * * * *
 * * * *
  * * *
   * *
    *
*/
function invertedPy(n) {
  for (let i = n; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "* ".repeat(i);
    console.log(spaces + stars);
  }
}
invertedPy(5);

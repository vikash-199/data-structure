/*
const createHelloWorld = () => {
  return function () {
    return "Hello World";
  };
};

*/

// Function Hoisting :- Javascript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax. If you declare a function with a variable, you cannot use it before it is declared.

add(2, 3);

function add(a, b) {
  console.log(a + b);
}

// But in case of annonymous function, you can't use it before it is declared.
add1(2, 3);
const add1 = function (a, b) {
  console.log(a + b);
};

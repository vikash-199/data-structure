const createHelloWorld = () => {
  return function () {
    return "Hello World";
  };
};

// Function Hoisting :- Javascript has a feature called hoisting where a function can sometimes be used before it is initialized. You can only do this if you declare functions with the function syntax. If you declare a function with a variable, you cannot use it before it is declared.

add(2, 3);

function add(a, b) {
  console.log(a + b);
}
/*
But in case of annonymous function, you can't use it before it is declared.
add1(2, 3);
const add1 = function (a, b) {
  console.log(a + b);
};

Annonymous function :- An anonymous function is a function without a name. It is often used where functions are used as values, such as arguments to other functions or assigned to variables.

Closers :- The combination of the function and its enviroment is called a closure
*/
function creaeCounter(init) {
  function increment() {
    return ++counter;
  }

  return {
    increment: increment,
  };
}

const counter1 = creaeCounter(); // conter1 is an object
const counter2 = creaeCounter();

console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2

console.log(counter2.increment()); // 1

// Array spred operator
const a = [1, 2];
const b = [3, 4, 5];

function add2(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}

console.log(add2(...a)); // 3
console.log(add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;
  const original = init; // Store the initial value

  function increment() {
    return ++count;
  }

  function decrement() {
    return --count;
  }

  function reset() {
    count = original; // Reset to the initial value
    return count;
  }

  return {
    increment,
    decrement,
    reset,
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

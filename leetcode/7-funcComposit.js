/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    for (let fn of functions.reverse()) {
      x = fn(x);
    }
    return x;
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

function compose(functions) {
  return function (x) {
    return functions.reduceRight((acc, fn) => fn(acc), x);
  };
}

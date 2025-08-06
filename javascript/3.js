a = 10;
console.log(a);
//console.log(window.a);  In browser globle object is window
console.log(global.a); // In Node globle boject is globle

function magic() {
  return (consmic = 100);
}
console.log(magic());

/*
| Environment | Global Object | Example              |
| ----------- | ------------- | -------------------- |
| Browser     | `window`      | `window.a = 10;`     |
| Node.js     | `global`      | `global.a = 10;`     |
| Universal   | `globalThis`  | `globalThis.a = 10;` |

*/

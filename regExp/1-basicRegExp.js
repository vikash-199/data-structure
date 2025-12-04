/*

Rguler Expressions:-
- Reguler expresssions are object 
- there are two way to create RegExp objects
  let regexp1=new RegExp('hello');
  let regexp2= /hello/

*/

let txt = "hello my name is name he vikash";
let regexp1 = new RegExp("he");
let regexp2 = /name/;

console.log(regexp1.test(txt));
console.log(regexp2.test(txt));
console.log(regexp2.exec(txt));

// String methods
console.log(txt.match(regexp1)); // return object
console.log(txt.search(regexp2)); // return staing index

console.log(txt.replace(regexp1, "hi"));
// console.log(txt.replaceAll(regexp1, "hi"));
console.log(txt.split(/is/));

console.log(txt.split(/\s/)); // '\s' is a space in regExp

const users = {
  frontendmaster: {},
  rahul: {},
};

let name = "constructor"; // name comes from input text

if (Object.hasOwn(users, name)) {
  console.log("BOSS");
} else {
  console.log("GUEST");
}
/*
if (users[name]) {
  console.log("BOSS");
} else {
  console.log("GUEST");
}
users[name] js going to check in prototype of object this key exeist or not which is bad
*/

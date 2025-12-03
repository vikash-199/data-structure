function revStr(str) {
  if (str === "") return "";
  return revStr(str.slice(1)) + str[0];
}

console.log(revStr("vikash"));

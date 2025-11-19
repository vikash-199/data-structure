"my nam is vikash";

function calChar(str, char) {
  let res = 0;
  for (let c of str) {
    if (c === char) res++;
  }
  return res;
}

console.log(calChar("my name is vikash", "i"));

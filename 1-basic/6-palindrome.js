function palindrome(str) {
  const formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const revStr = formattedStr.split("").reverse().join("");

  return formattedStr === revStr;
}

console.log(palindrome("my name is@vikash"));

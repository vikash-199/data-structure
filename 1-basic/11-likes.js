function displayLikes(arr) {
  const l = arr.length;
  if (l === 0) {
    console.log(`no one likes this`);
  } else if (l === 1) {
    console.log(`${arr[0]} one likes this`);
  } else if (l === 2) {
    console.log(`${arr[0]} and ${arr[1]} like this`);
  } else if (l === 3) {
    console.log(`${arr[0]},${arr[1]} and ${arr[2]} like this`);
  } else {
    console.log(`${arr[0]} , ${arr[1]} and ${l - 2} others like this`);
  }
}

displayLikes(["vikash", "sunil", "niranjan"]);

let regexp = /<p>.*?<\/p>/g;

let str = "<p>this is food</p> i am going <p>my name is</p>";

console.log(str.match(regexp));

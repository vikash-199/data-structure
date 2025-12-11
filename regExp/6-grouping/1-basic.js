let str = "a8b4c4j7 h8n4k3b7,j1b7m9b3k1,j4bb6k4 n33nkrm b2j4m5o1l2";

let regexp = /([a-z][0-9]){5}/gi;

console.log(str.match(regexp));

let str2 =
  "today is monday and tomorrow is tuesdays and then we have wednesdays and after thursday and then friday after that saturday and in last day will be sunday";

let regexp2 =
  /\b(monday|tuesday|wednesday|thrusday|friday|saturday|sunday)\b/gi;

console.log(str2.match(regexp2));

const date = new Date();
console.log(date); // date is a object

console.log(date.getFullYear()); // number retuen
console.log(date.getMonth()); // number
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.toString()); //return date and time in string
console.log(date.toDateString()); // return date string
/*
| Method                    | Return Type   | Example                      |
| ------------------------- | ------------- | ---------------------------- |
| `new Date()`              | `Date` object | `new Date()`                 |
| `getFullYear()`           | `number`      | `2025`                       |
| `getMonth()`              | `number`      | `0` to `11`                  |
| `getDate()`               | `number`      | `1` to `31`                  |
| `getDay()`                | `number`      | `0` to `6` (Sun to Sat)      |
| `getHours()`              | `number`      | `0` to `23`                  |
| `getMinutes()`            | `number`      | `0` to `59`                  |
| `getSeconds()`            | `number`      | `0` to `59`                  |
| `getTime()`               | `number`      | Milliseconds since 1970      |
| `toISOString()`           | `string`      | `"2025-08-02T18:30:00.000Z"` |
| `toString()`              | `string`      | `"Sat Aug 02 2025 23:59:59"` |
| `toDateString()`          | `string`      | `"Sat Aug 02 2025"`          |
| `toLocaleDateString()`    | `string`      | Localized date string        |
| `toLocaleTimeString()`    | `string`      | Localized time string        |
| `setDate()`, `setMonth()` | `number`      | Returns timestamp after set  |
*/

const d1 = new Date("2025-02-25");
const d2 = new Date("2025-03-24");
console.log(d2 > d1);

const res = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log(res);

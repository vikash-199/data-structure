//Q1. Write a function that reads a file asynchronously and logs its content.

import fs from "fs";
import path from "path";

// method 1

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// correct method 2
const filePath = path.join(__dirname, "data.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

// Using async/await

async function readFileAsync() {
  try {
    const data = await fs.readFile("data,txt", "utf8");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

readFileAsync();

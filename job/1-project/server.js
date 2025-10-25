import express from "express";

import books from "./objs.js";

const app = express();

app.get("/", (req, res) => {
  res.send(books);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

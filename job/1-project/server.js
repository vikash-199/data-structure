import express from "express";
import cors from "cors";

import books from "./objs.js";

const app = express();

app.use(cors()); //allows your backend server (API) to be accessed by web applications running on a different domain or port.
app.use(express.json()); //parses incoming requests with a JSON body and makes the data available in req.body.

app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 8;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const paginatedBooks = books.slice(startIndex, endIndex);
  res.send(books);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

import express from "express";
import cors from "cors";
import books from "./books.js";

const app = express();

// middleswire
app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => {
  const { sort, genre } = req.query;

  let filteredBooks = [...books];

  // sort by genre
  if (genre) {
    filteredBooks = filteredBooks.sort((b) => b.genre === genre);
  }
  // sort by price or name
  if (sort === "title_asc") {
    filteredBooks = filteredBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === "title_dec") {
    filteredBooks = filteredBooks.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  } else if (sort === "price_asc") {
    filteredBooks = filteredBooks.sort((a, b) => a.price - b.price);
  } else if (sort === "price_dec") {
    filteredBooks = filteredBooks.sort((a, b) => b.price - a.price);
  }

  // pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;

  const startIndex=(page -1)*limit;
  const endIndex=
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

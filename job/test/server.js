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
    filteredBooks = filteredBooks.sort(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
  }
  // sort by price or name
  if (sort === "title_asc") {
    filteredBooks = filteredBooks.sort((a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
    );
  } else if (sort === "title_dec") {
    filteredBooks = filteredBooks.sort((a, b) =>
      b.title.toLowerCase().localeCompare(a.title.toLowerCase())
    );
  } else if (sort === "price_asc") {
    filteredBooks = filteredBooks.sort((a, b) => a.price - b.price);
  } else if (sort === "price_dec") {
    filteredBooks = filteredBooks.sort((a, b) => b.price - a.price);
  }

  // pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.json({
    totleBooks: filteredBooks.length,
    totlePages: Math.ceil(filteredBooks.length / limit),
    currentPage: page,
    books: paginatedBooks,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

import express from "express";
import cors from "cors";
import books from "./objs.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 8;

  const { sort, genre } = req.query;

  let filteredBooks = [...books];

  // filter by genre
  if (genre) {
    filteredBooks = filteredBooks.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // sort logic
  if (sort === "title_asc") {
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort === "title_dec") {
    filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort === "price_asc") {
    filteredBooks.sort((a, b) => a.price - b.price);
  } else if (sort === "price_dec") {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

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

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) return res.status(404).json({ message: "Book not found" });

  res.json(book);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/*
| Parameter | Type   | Description                             | Example                 |
| --------- | ------ | --------------------------------------- | ----------------------- |
| `page`    | number | Page number for pagination (default: 1) | `/books?page=2`         |
| `limit`   | number | Number of books per page (default: 8)   | `/books?limit=5`        |
| `sort`    | string | Sort order by title or price            | `/books?sort=title_asc` |
| `genre`   | string | Filter by genre name                    | `/books?genre=Fantasy`  |

*/

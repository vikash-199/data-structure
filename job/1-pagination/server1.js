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

  res.json({
    totleBooks: books.length,
    totlePages: Math.ceil(books.length / limit),
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
  console.log("Server is listening on port 3000");
});

/*
| Endpoint            | Description             | Example                |
| ------------------- | ----------------------- | ---------------------- |
| `GET /books?page=1` | Get first 8 books       | Returns books 1–8      |
| `GET /books?page=2` | Get next 8 books        | Returns books 9–16     |
| `GET /books/5`      | Get single book details | Returns book with ID 5 |

*/

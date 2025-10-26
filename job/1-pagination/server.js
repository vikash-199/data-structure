import express from "express";
import cors from "cors";
import books from "./objs.js";

const app = express();
app.use(cors());
app.use(express.json());

// --- 30 Book Objects ---

// 📚 1. Get Books (Pagination + Sort + Filter + Search)
app.get("/books", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const { sort, genre, search } = req.query;

  let filteredBooks = [...books];

  // 🔍 Search by title or author
  if (search) {
    const keyword = search.toLowerCase();
    filteredBooks = filteredBooks.filter(
      (b) =>
        b.title.toLowerCase().includes(keyword) ||
        b.author.toLowerCase().includes(keyword)
    );
  }

  // 🎭 Filter by genre
  if (genre) {
    filteredBooks = filteredBooks.filter(
      (b) => b.genre.toLowerCase() === genre.toLowerCase()
    );
  }

  // 🔤 Sort
  if (sort === "title_asc")
    filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
  else if (sort === "title_desc")
    filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
  else if (sort === "price_asc")
    filteredBooks.sort((a, b) => a.price - b.price);
  else if (sort === "price_desc")
    filteredBooks.sort((a, b) => b.price - a.price);

  // 📄 Pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

  res.json({
    totalBooks: filteredBooks.length,
    totalPages: Math.ceil(filteredBooks.length / limit),
    currentPage: page,
    books: paginatedBooks,
  });
});

// 📖 2. Get Single Book by ID
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((b) => b.id === id);
  if (!book) return res.status(404).json({ message: "Book not found" });
  res.json(book);
});

// 📗 3. Get All Genres
app.get("/genres", (req, res) => {
  const genres = [...new Set(books.map((b) => b.genre))];
  res.json(genres);
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);

// import express from "express";
// import cors from "cors";
// import books from "./objs.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/books", (req, res) => {
//   const page = parseInt(req.query.page) || 1;
//   const limit = 8;

//   const { sort, genre } = req.query;

//   let filteredBooks = [...books];

//   // filter by genre
//   if (genre) {
//     filteredBooks = filteredBooks.filter(
//       (b) => b.genre.toLowerCase() === genre.toLowerCase()
//     );
//   }

//   // sort logic
//   if (sort === "title_asc") {
//     filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
//   } else if (sort === "title_dec") {
//     filteredBooks.sort((a, b) => b.title.localeCompare(a.title));
//   } else if (sort === "price_asc") {
//     filteredBooks.sort((a, b) => a.price - b.price);
//   } else if (sort === "price_dec") {
//     filteredBooks.sort((a, b) => b.price - a.price);
//   }

//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const paginatedBooks = filteredBooks.slice(startIndex, endIndex);

//   res.json({
//     totleBooks: filteredBooks.length,
//     totlePages: Math.ceil(filteredBooks.length / limit),
//     currentPage: page,
//     books: paginatedBooks,
//   });
// });

// app.get("/books/:id", (req, res) => {
//   const bookId = parseInt(req.params.id);
//   const book = books.find((b) => b.id === bookId);

//   if (!book) return res.status(404).json({ message: "Book not found" });

//   res.json(book);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

/*
| Parameter | Type   | Description                             | Example                 |
| --------- | ------ | --------------------------------------- | ----------------------- |
| `page`    | number | Page number for pagination (default: 1) | `/books?page=2`         |
| `limit`   | number | Number of books per page (default: 8)   | `/books?limit=5`        |
| `sort`    | string | Sort order by title or price            | `/books?sort=title_asc` |
| `genre`   | string | Filter by genre name                    | `/books?genre=Fantasy`  |


example endpoints

| Description                           | Example Endpoint                             |
| ------------------------------------- | -------------------------------------------- |
| Get all books (first 8)               | `/books`                                     |
| Get page 2                            | `/books?page=2`                              |
| Get Fantasy books only                | `/books?genre=Fantasy`                       |
| Get Self-help books, sorted A–Z       | `/books?genre=Self-help&sort=title_asc`      |
| Get all books sorted by highest price | `/books?sort=price_desc`                     |
| Get Romance books, page 2, sorted A–Z | `/books?genre=Romance&page=2&sort=title_asc` |


*/

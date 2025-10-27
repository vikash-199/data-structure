// import express from "express";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import cors from "cors";
// import bodyParser from "body-parser";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const JWT_SECRET = "mysecretkey"; // in production, store in .env

// // fake users (narmal fron DB)
// const users = [
//   { id: 1, username: "testuser", password: bcrypt.hashSync("123456", 8) },
// ];

// // Register new user
// app.use("/register", (req, res) => {
//   const { username, password } = req.body;
//   const isUserExist = users.find((u = u.username === username));
//   if (isUserExist)
//     return res.status(400).json({ message: "User already exist" });
//   const hashedPassword = bcrypt.hashSync(password, 8);
//   const newUser = { id: users.length + 1, username, password: hashedPassword };
//   users.push(newUser);

//   res.json({ message: "User registred successfully" });
// });

import express from "express";
import cors from "cors";
import books from "./objs.js";

const app = express();

// middlewire
app.use(cors());
app.use(express.json());

app.get("/books", (req, res) => {
  const { sort, genre } = req.query;
  let filteredBooks = [...books];

  // filter by Genre
  if (genre) {
    filteredBooks = filteredBooks.filter(
      (b) => b.genre.toLowerCase() === genre.toLocaleLowerCase()
    );
  }

  // Filter by price and A-Z
  if (sort === "title_asc") {
    filteredBooks = filteredBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === "price_asc") {
    filteredBooks = filteredBooks.sort((a, b) => {
      a.price - b.price;
    });
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 8;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  filteredBooks = filteredBooks.slice(startIndex, endIndex);

  res.json({
    totleBooks: filteredBooks.length,
    totlePages: Math.ceil(filteredBooks.length / limit),
    currentPage: page,
    books: filteredBooks,
  });
});
app.listen(3000, () => {
  console.log("Server running on 3000");
});

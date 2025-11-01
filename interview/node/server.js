// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";

// const app = express();

// mongoose.connect(
//   "mongodb+srv://vikashkumar24041997:UwswORRUH164UIaH@cluster0.atpsuwu.mongodb.net/books"
// );

// const BookSchima = new mongoose.Schema({
//   title: String,
//   auther: String,
//   year: Number,
// });

// const Book = mongoose.model("Book", BookSchima);

// app.use(cors());
// app.use(express.json());

// // Create a book
// app.post("/books", async (req, res) => {
//   const book = new Book(req.body);
//   try {
//     await book.save();
//     res.json(book);
//   } catch (err) {
//     console.log(err);
//   }
// });

// // Read the books
// app.get("/books", async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json({
//       totleBooks: books.length,
//       books,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

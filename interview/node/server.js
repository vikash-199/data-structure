import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

mongoose.connect("");

//schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
});

const Book = mongoose.model("Book", BookSchema);

//CURD opration

app.post("/", async (req, res) => {
  const book = new Book(req.body);
  try {
    await book.save();
    res.json("Book is created");
  } catch (err) {
    console.log(err);
  }
});

app.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.log(err);
  }
});

app.get("/books/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (err) {
    console.log(err);
  }
});

app.put("/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
});
// import express from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// const app = express();

// mongoose.connect(
//   "mongodb+srv://vikashkumar24041997:UwswORRUH164UIaH@cluster0.atpsuwu.mongodb.net/books"
// );

// //schema

// const BooSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   year: {
//     type: Number,
//     required: true,
//   },
// });

// const Book = mongoose.model("Book", BooSchema);

// //middleware

// app.use(cors());
// app.use(express.json());

// //create
// app.post("/books", async (req, res) => {
//   const book = new Book(req.body);
//   try {
//     await book.save();
//     res.json("Book is created");
//   } catch (err) {
//     console.log(err);
//   }
// });

// //get
// app.get("/books", async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json({ totleBooks: books.length, books });
//   } catch (err) {
//     console.log(err);
//   }
// });

// //get by id
// app.get("/books/:id", async (req, res) => {
//   try {
//     const book = await Book.findById(req.params.id);
//     res.json(book);
//   } catch (err) {
//     console.log(err);
//   }
// });

// //update
// app.put("/books/:id", async (req, res) => {
//   const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(book);
// });

// //delete
// app.delete("/books/:id", async (req, res) => {
//   try {
//     await Book.findByIdAndDelete(req.params.id);
//   } catch (err) {
//     console.log(err);
//   }
//   res.send("Book is deleted");
// });

// app.listen(5000, () => {
//   console.log("Hello");
// });
//
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

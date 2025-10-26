import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRET = "mysecretkey"; // in production, store in .env

// fake users (narmal fron DB)
const users = [
  { id: 1, username: "testuser", password: bcrypt.hashSync("123456", 8) },
];

// Register new user
app.use("/register", (req, res) => {
  const { username, password } = req.body;
  const isUserExist = users.find((u = u.username === username));
});

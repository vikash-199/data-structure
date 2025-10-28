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
import bcrypt from "bcryptjs";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

const JWT_SECRETKEY = "mysecretkey";

let users = [
  { id: 1, username: "vikash@1997", password: bcrypt.hashSync("123456", 8) },
];

app.get("/users", (req, res) => {
  res.json({
    totleUsers: users.length,
    users,
  });
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const isUserExist = users.find((u) => u.username === username);

  if (isUserExist)
    return res.status(400).json({ message: "User already exist" });

  const hashedPassword = bcrypt.hashSync(password, 8);

  const newUser = { id: users.length + 1, username, password: hashedPassword };

  users.push(newUser);
  res.json({ message: "New user created" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

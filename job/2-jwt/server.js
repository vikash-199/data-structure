import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// fake user
let users = [
  { id: 1, username: "vikash", password: bcrypt.hashSync("123456", 8) },
];

// routes
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

  const newuser = { id: users.length, username, password: hashedPassword };

  users.push(newuser);

  res.json({ message: "New user created" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username);

  if (!user) return res.status(401).json({ message: "User not found" });

  const isPasswordValid=
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

// import express from "express";
// import bcrypt from "bcryptjs";
// import cors from "cors";
// import bodyParser from "body-parser";
// import jwt from "jsonwebtoken";

// const app = express();

// // middleware
// app.use(cors());
// app.use(bodyParser.json());

// const JWT_SECRETKEY = "mysecretkey";

// let users = [
//   { id: 1, username: "vikash@1997", password: bcrypt.hashSync("123456", 8) },
// ];

// app.get("/users", (req, res) => {
//   res.json({
//     totleUsers: users.length,
//     users,
//   });
// });

// app.post("/register", (req, res) => {
//   const { username, password } = req.body;

//   const isUserExist = users.find((u) => u.username === username);

//   if (isUserExist)
//     return res.status(400).json({ message: "User already exist" });

//   const hashedPassword = bcrypt.hashSync(password, 8);

//   const newUser = { id: users.length + 1, username, password: hashedPassword };

//   users.push(newUser);
//   res.json({ message: "New user created" });
// });

// app.post("/login", (req, res) => {
//   const { username, password } = req.body;
//   const user = users.find((u) => u.username === username);
//   if (!user) return res.status(400).json({ message: "User not found" });

//   const isPasswordValid = bcrypt.compareSync(password, user.password);
//   if (!isPasswordValid)
//     return res.status(401).json({ message: "Invalid password" });

//   // Generate token valid for 2 hours
//   const token = jwt.sign(
//     { id: user.id, username: user.username },
//     JWT_SECRETKEY,
//     {
//       expiresIn: "2h",
//     }
//   );

//   res.json({ message: "Login successful", token });
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

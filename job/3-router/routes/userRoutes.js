import express from "express";

const router = express.Router();

//get /users
router.get("/", (req, res) => {
  res.send("All users");
});

router.post("/", (req, res) => {
  res.send("User created");
});

export default router;
// module.exports=router

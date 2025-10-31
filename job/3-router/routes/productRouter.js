import express from "express";

const router = express.Router();

//getting all the products
router.get("/", (req, res) => {
  res.send("All product");
});

router.get("/", (req, res) => {
  res.send(`Product with ID: ${req.params.id}`);
});

export default router;

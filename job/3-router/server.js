import express from "express";

const app = express();

import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRouter.js";

//mount routes
app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

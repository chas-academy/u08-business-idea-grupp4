import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import multer from "multer";
import { userRouter } from "./routes/users.js";
import { postRouter } from "./routes/posts.js";
import { categoryRouter } from "./routes/category.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

const upload = multer({ dest: "uploads/" });

app.use("/auth", userRouter);
app.use("/api", userRouter);
app.use("/post", postRouter);
app.use("/category", categoryRouter);

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

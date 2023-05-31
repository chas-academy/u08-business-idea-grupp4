import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { imageRouter } from "./routes/images.js";
import { categoryRouter } from "./routes/category.js";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/auth", userRouter);
app.use("/auth", imageRouter);
app.use("/category", categoryRouter);

mongoose
.connect(
  "mongodb+srv://bakerhaider:hmshood@cluster0.ts1n8aq.mongodb.net/Cluster0?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

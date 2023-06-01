import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { imageRouter } from "./routes/images.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = 3001;

app.use("/auth", userRouter);
app.use("/auth", imageRouter);

const dbConnectionString = process.env.DB_CONNECTION_STRING;

console.log(dbConnectionString);
console.log("hello");

mongoose
  .connect(dbConnectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(port, () => {
  console.log(`running on port ${port}`);
});

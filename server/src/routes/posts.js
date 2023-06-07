import express from "express";
import multer from "multer";
import fs from "fs";
import { ImageModel } from "../models/ImageSchema.js";
import { PostModel } from "../models/PostSchema.js";

const router = express.Router();

// Create a post
router.post("/create-post", async (req, res) => {
  try {
    const { description, duration, instructions } = req.body;

    // Create a new post
    const post = await PostModel.create({
      description,
      duration,
      instructions,
    });

    res.status(200).json({ message: "Post created successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to create post",
      errormessage: error.message,
    });
  }
});

export { router as postRouter };

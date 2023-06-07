import express from "express";
import { PostModel } from "../models/PostSchema.js";

const router = express.Router();

// Create a post
router.post("/create-post", async (req, res) => {
  try {
    const {
      author,
      pictures,
      description,
      ingredients,
      duration,
      instructions,
      user,
    } = req.body;

    // Create a new post
    const post = await PostModel.create({
      author,
      pictures,
      description,
      ingredients,
      duration,
      instructions,
      user,
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

// Get all posts
router.get("/posts", async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await PostModel.find();

    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch posts",
      errorMessage: error.message,
    });
  }
});

// Get a single post by ID
router.get("/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;

    // Find the post by ID in the database
    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ post });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch the post",
      errorMessage: error.message,
    });
  }
});

// Update a post by ID
router.put("/posts/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const {
      author,
      pictures,
      description,
      ingredients,
      duration,
      instructions,
      user,
    } = req.body;

    // Find the post by ID in the database
    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Update the post properties
    post.author = author;
    post.pictures = pictures;
    post.description = description;
    post.ingredients = ingredients;
    post.duration = duration;
    post.instructions = instructions;
    post.user = user;

    // Save the updated post
    await post.save();

    res.status(200).json({ message: "Post updated successfully", post });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to update the post",
      errorMessage: error.message,
    });
  }
});

export { router as postRouter };

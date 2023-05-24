import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comment: { type: String, required: true },
  reviewScore: { type: Number, required: false },
  date: { type: Date, required: true },
});

export const CommentsModel = mongoose.model("Comment", CommentSchema);

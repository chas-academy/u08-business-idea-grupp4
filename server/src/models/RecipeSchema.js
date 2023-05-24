import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: {
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    unit: { type: String, required: true },
  },
  duration: { type: Number, required: false },
  steps: { type: Array, required: true },
  reviewScore: { type: Number, required: false },
  likes: { type: Number, required: false },
  createdAt: { type: Date, required: true },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const RecipeModel = mongoose.model("Recipe", RecipeSchema);

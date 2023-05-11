import mongoose from "mongoose";

const CategoryListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const UserModel = mongoose.model("CategoryList", CategoryListSchema);

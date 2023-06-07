import mongoose from "mongoose";

const CategoryListSchema = new mongoose.Schema({
  title: { type: String, required: true },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recipe",
    required: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: false,
  },
});

export const CategoryListModel = mongoose.model(
  "CategoryList",
  CategoryListSchema
);
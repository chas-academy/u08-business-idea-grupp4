import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: Array, required: true },
  time: { type: Number, required: false },
  steps: {
    1: { type: String, required: false },
    2: { type: String, required: false },
    3: { type: String, required: false },
    4: { type: String, required: false },
    5: { type: String, required: false },
    6: { type: String, required: false },
    7: { type: String, required: false },
    8: { type: String, required: false },
    9: { type: String, required: false },
    10: { type: String, required: false },
  },
  reviewScore: { type: Number, required: false },
  likes: { type: Number, required: false },
  date: { type: Date, required: true },
  /* userName: { type: String, required: true }, */
});

export const UserModel = mongoose.model("Recipe", RecipeSchema);

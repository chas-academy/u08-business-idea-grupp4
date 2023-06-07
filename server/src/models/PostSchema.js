"import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: { type: String, required: false },
  pictures: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
  description: { type: String, required: false },
  ingredients: [
    {
      name: { type: String, required: false },
      quantity: { type: Number, required: false },
      unit: { type: String, required: false },
      _id: false,
    },
  ],
  duration: {
    hours: { type: Number, required: false },
    minutes: { type: Number, required: false },
  },
  instructions: [
    {
      step: { type: Number },
      description: { type: String, required: false },
      _id: false,
    },
  ],
  reviewScore: { type: Number, default: 0, required: false },
  likes: { type: Number, default: 0, required: false },
  createdAt: { type: Date, required: false },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

PostSchema.pre("save", async function (next) {
  if (!this.createdAt) {
    this.createdAt = new Date();
  }

  this.instructions.forEach((instruction, index) => {
    if (!instruction.step) {
      instruction.step = index + 1;
    }
  });

  next();
});

export const PostModel = mongoose.model("Post", PostSchema);

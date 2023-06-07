import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    default: "6480e77f1e54ef642e2278da",
  },
  bio: { type: String, required: false },
});

export const UserModel = mongoose.model("User", UserSchema);

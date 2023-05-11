import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePicture: { type: String, required: false },
  bio: { type: String, required: false },
});

export const UserModel = mongoose.model("User", UserSchema);

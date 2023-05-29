import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: {
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
  },
});

export const ImageModel = mongoose.model("Image", ImageSchema);

import express from "express";
import multer from "multer";
import fs from "fs";
import { ImageModel } from "../models/ImageSchema.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = file.originalname.split(".").pop();
    callback(null, file.fieldname + "-" + uniqueSuffix + "." + extension);
  },
});

const upload = multer({ dest: "uploads/" });

// Upload profile picture
router.post("/profile-image", upload.single("avatar"), async (req, res) => {
  try {
    const name = req.file.originalname;
    const filename = req.file.path;
    const fileType = req.file.mimetype;

    const image = await ImageModel.create({
      name,
      img: {
        data: await fs.promises.readFile(filename),
        contentType: fileType,
      },
    });

    console.log("Image is saved");
    res.status(200).json({ message: "Image uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to upload image",
      errormessage: error.message,
      reqs: req.filename,
    });
  }
});

// Upload recipe pictures (single or multiple)
router.post("/image", upload.array("recipe", 10), async (req, res) => {
  try {
    const files = req.files;

    const imageIds = [];

    const imagePromises = files.map(async (file) => {
      const name = file.originalname;
      const filename = file.path;
      const fileType = file.mimetype;

      const image = await ImageModel.create({
        name,
        img: {
          data: await fs.promises.readFile(filename),
          contentType: fileType,
        },
      });

      console.log("Image is saved");

      imageIds.push(image._id); // Store the image ID

      return image;
    });

    await Promise.all(imagePromises);

    res.status(200).json({ message: "Images uploaded successfully", imageIds });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to upload images",
      errormessage: error.message,
    });
  }
});

// Get images
router.get("/get/:id", async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await ImageModel.findById(imageId);

    if (!image) {
      return res.status(404).json({ error: "Image not found" });
    }

    res.set("Content-Type", image.img.contentType);
    res.send(image.img.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to retrieve image",
      errormessage: error.message,
    });
  }
});

export { router as imageRouter };

import express from "express";
import multer from "multer";
import fs from "fs";
import { ImageModel } from "../models/ImageSchema.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

// Upload profile picture
router.post("/profile", upload.single("avatar"), async (req, res) => {
  try {
    const name = req.body.filename;
    const filename = req.file.path;

    const image = await ImageModel.create({
      name,
      img: {
        data: await fs.promises.readFile(filename),
        contentType: "image/png",
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

// Upload One recipe picture
router.post("/post", upload.single("recipe"), async (req, res) => {
  try {
    const name = req.body.filename;
    const filename = req.file.path;

    const image = await ImageModel.create({
      name,
      img: {
        data: await fs.promises.readFile(filename),
        contentType: "image/png",
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

// Upload multiple recipe pictures
router.post("/post", upload.array("recipe", 5), async (req, res) => {
  try {
    const files = req.files;
    const imagePromises = files.map(async (file) => {
      const name = file.originalname;
      const filename = file.path;

      const image = await ImageModel.create({
        name,
        img: {
          data: await fs.promises.readFile(filename),
          contentType: "image/png",
        },
      });

      console.log("Image is saved");
      return image;
    });

    await Promise.all(imagePromises);

    res.status(200).json({ message: "Images uploaded successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to upload images",
      errormessage: error.message,
    });
  }
});

// Get images
router.get("/post/:id", async (req, res) => {
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

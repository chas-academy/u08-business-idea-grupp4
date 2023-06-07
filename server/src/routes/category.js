import express from "express";
import mongoose from "mongoose";
import { CategoryListModel } from "../models/CategoryListSchema.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/addCategory", async (req, res) => {
    const category = new CategoryListModel(req.body)
    try {
        const response = await category.save()
        res.json(response)
    } catch (error) {
        res.json(error)
    }
});

router.get('/categories/:userId', async (req,res) => {
    try {
        const categories = await CategoryListModel.find({ user: req.params.userId })
        res.json(categories)
    } catch (error) {
        res.json(error)
    }
})

export { router as categoryRouter };
import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/Users.js'

const router = express.Router()

router.post("/register", async (req, res) => {
    const { email, username, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ email, username, password: hashedPassword });
    await newUser.save();
    return res.json({ message: "User registered successfully" });
  });

router.post('/login', async(req, res) => {
    const { email, password } = req.body
    const user = await UserModel.findOne({ email })
    if (!user) {
        res.json({ message: 'user doies not exist'})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        return res.json({ message: 'Email or password is incorrect'})
    }
    const token = jwt.sign({ id: user._id }, 'secret')
    res.json({ token, userID: user._id })
})

export { router as userRouter }
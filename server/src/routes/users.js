import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/Users.js";

const router = express.Router();

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    return res.json({ message: "Email or password is incorrect" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Email or password is incorrect" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  return res.json({ token, userID: user._id, user: { id: user._id, email: user.email } });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  jwt.verify(token, "secret", (err, user) => {
    if (err) return res.status(403).json({ message: "Forbidden" });
    req.user = user;
    next();
  });
}

router.get('/profile/:id', authenticateToken, async  (req, res) => {
  try {
    const userId = req.params.id;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/profile/:username', authenticateToken, async (req, res) => {
  try {
    const username = req.params.username;
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/profiles', authenticateToken, async (req, res) => {
  try {
    const users = await UserModel.find({}, '_id username');
    const userProfile = users.map((user) => {
      return {
        _id: user._id,
        username: user.username
      };
    });
    res.json({ userProfile });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});



router.put('/profile/:id', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.id; 
    const { bio, username, password, profilePicture } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.bio = bio;
    user.password = hashedPassword;
    user.username = username;
    user.profilePicture = profilePicture;
    await user.save();
    

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export { router as userRouter };
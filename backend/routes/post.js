import express from "express";
import Post from "../models/Post.js";

const router = express.Router();

// CREATE POST
router.post("/", async (req, res) => {
  try {
    const newPost = new Post(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// LIKE / UNLIKE
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.body.userId)) {
      post.likes.push(req.body.userId);
      await post.save();
      res.json("Post liked");
    } else {
      post.likes = post.likes.filter(id => id !== req.body.userId);
      await post.save();
      res.json("Post unliked");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
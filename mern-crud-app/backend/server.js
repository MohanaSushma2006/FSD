
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// Environment variables
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

// Post Schema and Model
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model("Post", postSchema);

// Create a new post
app.post("/api/v1/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();

    res.status(201).send({
      message: "Post created successfully",
      data: post,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Read all posts
app.get("/api/v1/posts", async (req, res) => {
  try {
    const posts = await Post.find();

    res.status(200).send({
      message: "Posts retrieved successfully",
      data: posts,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Read a post by ID
app.get("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    res.status(200).send({
      message: "Post retrieved successfully",
      data: post,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Update a post by ID
app.put("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!post) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    res.status(200).send({
      message: "Post updated successfully",
      data: post,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Delete a post by ID
app.delete("/api/v1/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    res.status(200).send({
      message: "Post deleted successfully",
      data: post,
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// Test route
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to MERN CRUD API!",
  });
});

// Start server only after successful MongoDB connection
const startServer = async () => {
  try {
    if (!mongoUri || !dbName) {
      throw new Error("MONGO_URI or DB_NAME is missing in environment variables");
    }

    await mongoose.connect(mongoUri, {
      dbName: dbName,
    });

    console.log("Connected to MongoDB successfully");

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();

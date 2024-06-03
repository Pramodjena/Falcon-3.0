const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

// Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/practice")
  .then(() => console.log("MongoDB connected sucessfully"))
  .catch((error) => console.log(error));

app.get("/api", (req, res) => {
  res.json("Api working sucessufully");
});

// Create a user
app.post("/api/user", async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ msg: "Please fill the details" });
  }
  try {
    await User.create({ name, email });
    res.status(201).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
});

// Get all user
app.get("/api/users", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.json(allUser);
  } catch (error) {
    res.json({ msg: error });
  }
});

// Get user by id
app.get("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: "User not found" });
  }
});

// Update user by id
app.patch("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: "User not found" });
  }
});

// Delete user by id
app.delete("/api/user/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: "User not found" });
  }
});

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running at ${process.env.PORT}`);
});

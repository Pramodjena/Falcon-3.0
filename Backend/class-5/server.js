const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Connection database
connectDB();

// Routes
app.use("/api", userRoutes);
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to API!" });
});

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const fs = require("fs");
require("dotenv").config();

const app = express();

// Middlewares
app.use(express.json());

// Custom function
const readData = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Express CRUD API");
});

// Get all users
app.get("/users", (req, res) => {
  const users = readData();
  res.json(users);
});

// Get user by id
app.get("/users/:id", (req, res) => {
  const users = readData();
  const userId = req.params.id;
  const user = users.find((user) => user.id === parseInt(userId));
  if (!user) {
    res.status(404).send("User not found");
  } else {
    res.json(user);
  }
});

// Update a user by Id
app.put("/users/:id", (req, res) => {
  const users = readData();
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users[userIndex] = { id: users[userIndex].id, ...req.body };
    writeData(users);
    res.json(users[userIndex]);
  } else {
    res.status(404).send("User not found");
  }
});

// Delete a user by Id
app.delete("/users/:id", (req, res) => {
  let users = readData();
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex((user) => user.id === userId);

  if (userIndex !== -1) {
    users = users.filter((user) => user.id !== userIndex);
    writeData(users);
    res.json("User deleted successfully");
  }
});

// Post a user
app.post("/user", (req, res) => {
  const users = readData();
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  writeData(users);
  res.json({ msg: "user created successfully" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

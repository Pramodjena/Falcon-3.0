const express = require("express");
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/userController");

const router = express.Router();

router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);
router.patch("/user/:id", updateUserById);
router.delete("/user/:id", deleteUserById);

module.exports = router;

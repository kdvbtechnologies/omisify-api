const express = require("express");
const {
  addUser,
  getUserById,
  updateUser,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/add", addUser);
userRouter.get("/:id", getUserById);
userRouter.put("/update/:id", updateUser);

module.exports = userRouter;

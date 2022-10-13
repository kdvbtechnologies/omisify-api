const express = require("express");
const {
  addUser,
  getUserById,
  updateUser,
  login,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.put("/update/:id", updateUser);

module.exports = userRouter;

const express = require("express");
const {
  addUser,
  getUserById,
  updateUser,
  login,
  updateComment,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.put("/update/:id", updateUser);
userRouter.put("/update-comment/:id", updateComment);

module.exports = userRouter;

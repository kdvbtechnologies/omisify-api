const express = require("express");
const {
  addUser,
  getUserById,
  all,
  updateUser,
  login,
  updateComment,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.get("/", all);
userRouter.put("/update/:id", updateUser);
userRouter.put("/updatecomment/:id", updateComment);

module.exports = userRouter;

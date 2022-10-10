const express = require("express");
const { addUser, getUserById } = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/add", addUser);
userRouter.get("/:id", getUserById);

module.exports = userRouter;

const express = require("express");
const {
  addUser,
  getUserById,
  all,
  updateUser,
  updateUserInfos,
  login,
  updateComment,
  updateemail,
} = require("../controllers/user.controller");
const userRouter = express.Router();

userRouter.post("/signup", addUser);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.get("/", all);
userRouter.put("/update/:id", updateUser);
userRouter.put("/updateuserinfos/:id", updateUserInfos);

// comment
userRouter.put("/updatecomment/:id", updateComment);

// email
userRouter.put("/updateemail/:id", updateemail);

module.exports = userRouter;

const express = require("express");
const {
  addUser,
  getUserById,
  all,
  updateUser,
  updateUserInfos,
  login,

  updateComment,
  updatee10k,
  updateemail,
  updatelikescomment,
  updatelikespublication,

  updatem10k,
  updatemessage,
  updatemwi,
  updatepublication,
  updatepwi,

  updatepwp,
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

// e10k
userRouter.put("/updatee10k/:id", updatee10k);

// email
userRouter.put("/updateemail/:id", updateemail);

// likescomment
userRouter.put("/updatelikescomment/:id", updatelikescomment);

// likespublication
userRouter.put("/updatelikespublication/:id", updatelikespublication);

// m10k
userRouter.put("/updatem10k/:id", updatem10k);

// message
userRouter.put("/updatemessage/:id", updatemessage);

// mwi
userRouter.put("/updatemwi/:id", updatemwi);

// publication
userRouter.put("/updatepublication/:id", updatepublication);

// pwi
userRouter.put("/updatepwi/:id", updatepwi);

// pwp
userRouter.put("/updatepwp/:id", updatepwp);

module.exports = userRouter;

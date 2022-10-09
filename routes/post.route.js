const express = require("express");
const { addPost, getPostById } = require("../controllers/post.controller");
const postRouter = express.Router();

postRouter.post("/add", addPost);
postRouter.get("/:id", getPostById);

module.exports = postRouter;

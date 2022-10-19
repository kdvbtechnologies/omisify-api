const express = require("express");
const paneloctober = express.Router();
const {
  addComment,
  getAllComment,
} = require("../../controllers/panel/october/panelcommentoctober.controller");

paneloctober.post("/comment/add", addComment);
paneloctober.get("/comment/", getAllComment);

module.exports = paneloctober;

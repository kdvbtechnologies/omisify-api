const express = require("express");
const {
  add,
  all,
  alluser,
} = require("../../controllers/panel/panel.controller");
const panel = express.Router();

panel.post("/add", add);
panel.get("/", all);
panel.get("/alluser", alluser);

module.exports = panel;

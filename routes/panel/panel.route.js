const express = require("express");
const { add, all } = require("../../controllers/panel/panel.controller");
const panel = express.Router();

panel.post("/add", add);
panel.get("/", all);

module.exports = panel;

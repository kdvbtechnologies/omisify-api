const express = require("express");
const { add } = require("../../controllers/panel/panel.controller");
const panel = express.Router();

panel.post("/add", add);

module.exports = panel;

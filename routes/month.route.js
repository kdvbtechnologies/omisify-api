const express = require("express");
const { newMonth } = require("../controllers/month.controller");

const monthRouter = express.Router();

monthRouter.post("/add", newMonth);

module.exports = monthRouter;

const express = require("express");
const { newMonth, getMonthById } = require("../controllers/month.controller");

const monthRouter = express.Router();

monthRouter.post("/add", newMonth);
monthRouter.get("/:id", getMonthById);

module.exports = monthRouter;

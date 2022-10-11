const express = require("express");
const {
  newMonth,
  getMonthById,
  getAllMonth,
} = require("../controllers/month.controller");

const monthRouter = express.Router();

monthRouter.post("/add", newMonth);
monthRouter.get("/:id", getMonthById);
monthRouter.get("/", getAllMonth);

module.exports = monthRouter;

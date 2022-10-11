const express = require("express");
const {
  addPoint,
  getPointById,
  getAllPoint,
} = require("../controllers/point.controller");

const pointRouter = express.Router();

pointRouter.post("/add", addPoint);
pointRouter.get("/:id", getPointById);
pointRouter.get("/", getAllPoint);

module.exports = pointRouter;

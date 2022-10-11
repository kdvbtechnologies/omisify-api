const express = require("express");
const { addPoint, getPointById } = require("../controllers/point.controller");

const pointRouter = express.Router();

pointRouter.post("/add", addPoint);
pointRouter.get("/:id", getPointById);

module.exports = pointRouter;

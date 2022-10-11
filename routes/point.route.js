const express = require("express");
const {
  addSeptember,
  getPointById,
  allSeptember,
  addOctober,
  allOctober,
  addNovember,
  allNovember,
} = require("../controllers/point.controller");

const pointRouter = express.Router();

pointRouter.post("/add/september", addSeptember);
pointRouter.get("/:id", getPointById);
pointRouter.get("/all/september", allSeptember);

pointRouter.post("/add/october", addOctober);
pointRouter.get("/all/october", allOctober);

pointRouter.post("/add/november", addNovember);
pointRouter.get("/all/november", allNovember);

module.exports = pointRouter;

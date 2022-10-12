const express = require("express");
const {
  addSeptember,
  addtSeptember,
  getPointById,
  getByIdTotalPointSeptember,
  allSeptember,

  addOctober,
  allOctober,

  addNovember,
  allNovember,
} = require("../controllers/point.controller");

const pointRouter = express.Router();

pointRouter.post("/add/september", addSeptember);
pointRouter.post("/add/tseptember", addtSeptember);
pointRouter.get("/all/tseptember/:id", getByIdTotalPointSeptember);
pointRouter.get("/:id", getPointById);
pointRouter.get("/all/september", allSeptember);

pointRouter.post("/add/october", addOctober);
pointRouter.get("/all/october", allOctober);

pointRouter.post("/add/november", addNovember);
pointRouter.get("/all/november", allNovember);

module.exports = pointRouter;

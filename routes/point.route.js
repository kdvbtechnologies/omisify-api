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

pointRouter.post("/add/September", addSeptember);
pointRouter.get("/:id", getPointById);
pointRouter.get("/all/September", allSeptember);

pointRouter.post("/add/October", addOctober);
pointRouter.get("/all/October", allOctober);

pointRouter.post("/add/November", addNovember);
pointRouter.get("/all/November", allNovember);

module.exports = pointRouter;

const express = require("express");
const {
  addEnterprise,
} = require("../../controllers/business/userbusiness.controller");
const userbusinessRouter = express.Router();

userbusinessRouter.post("/signup", addEnterprise);

module.exports = userbusinessRouter;

const septemberModel = require("../models/september.model");
const octoberModel = require("../models/october.model");
const novemberModel = require("../models/november.model");
const tseptemberModel = require("../models/tseptember.model");
const ObjectID = require("mongoose").Types.ObjectId;

// september
// september
// september
module.exports.addSeptember = async (req, res) => {
  const newPoint = new septemberModel(req.body);
  try {
    const savedPoint = await newPoint.save();
    res.status(200).json(savedPoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getPointById = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    septemberModel.findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.allSeptember = async (req, res) => {
  try {
    const allpoint = await septemberModel.find().select();
    res.status(200).json(allpoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.addtSeptember = async (req, res) => {
  const newPoint = new tseptemberModel(req.body);
  try {
    const savedPoint = await newPoint.save();
    res.status(200).json(savedPoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getByIdTotalPointSeptember = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    tseptemberModel.findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.updateTotalPoint = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    const total = await tseptemberModel.findById(req.params.id);
    if (total.userId === req.body.userId) {
      await total.updateOne({ $set: req.body });
      res.status(200).json("Total updated with success");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

// October
// October
// October
module.exports.addOctober = async (req, res) => {
  const newPoint = new octoberModel(req.body);
  try {
    const savedPoint = await newPoint.save();
    res.status(200).json(savedPoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.allOctober = async (req, res) => {
  try {
    const allpoint = await octoberModel.find().select();
    res.status(200).json(allpoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// November
// November
// November
module.exports.addNovember = async (req, res) => {
  const newPoint = new novemberModel(req.body);
  try {
    const savedPoint = await newPoint.save();
    res.status(200).json(savedPoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.allNovember = async (req, res) => {
  try {
    const allpoint = await novemberModel.find().select();
    res.status(200).json(allpoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

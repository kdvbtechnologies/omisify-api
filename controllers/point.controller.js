const pointModel = require("../models/point.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.addPoint = async (req, res) => {
  const newPoint = new pointModel(req.body);
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
    pointModel.findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getAllPoint = async (req, res) => {
  try {
    const allpoint = await pointModel.find().select();
    res.status(200).json(allpoint);
  } catch (err) {
    return res.status(500).json(err);
  }
};

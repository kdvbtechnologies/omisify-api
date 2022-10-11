const monthModel = require("../models/month.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.newMonth = async (req, res) => {
  const newMonth = new monthModel(req.body);
  try {
    const savedMonth = await newMonth.save();
    res.status(200).json(savedMonth);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.getMonthById = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    monthModel.findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

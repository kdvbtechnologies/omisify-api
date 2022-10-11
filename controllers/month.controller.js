const monthModel = require("../models/month.model");

module.exports.newMonth = async (req, res) => {
  const newMonth = new monthModel(req.body);
  try {
    const savedMonth = await newMonth.save();
    res.status(200).json(savedMonth);
  } catch (err) {
    return res.status(500).json(err);
  }
};

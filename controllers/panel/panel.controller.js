const panelModel = require("../../models/panel/panel.model");

module.exports.add = async (req, res) => {
  const initialize = new panelModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.all = async (req, res) => {
  try {
    const all = await panelModel.find().select();
    res.status(200).json(all);
  } catch (err) {
    return res.status(500).json(err);
  }
};

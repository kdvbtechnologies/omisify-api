const panelm10koctoberModel = require("../../../models/panel/october/panelm10koctober.model");

module.exports.addm10k = async (req, res) => {
  const initialize = new panelm10koctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllm10k = async (req, res) => {
  try {
    const allm10k = await panelm10koctoberModel.find().select();
    res.status(200).json(allm10k);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

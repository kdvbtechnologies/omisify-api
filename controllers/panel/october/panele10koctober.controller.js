const panele10koctoberModel = require("../../../models/panel/october/panele10koctober.model");

module.exports.adde10k = async (req, res) => {
  const initialize = new panele10koctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAlle10k = async (req, res) => {
  try {
    const alle10k = await panele10koctoberModel.find().select();
    res.status(200).json(alle10k);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

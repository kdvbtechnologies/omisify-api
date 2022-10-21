const panelpwpoctoberModel = require("../../../models/panel/october/panelpwpoctober.model");

module.exports.addpwp = async (req, res) => {
  const initialize = new panelpwpoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllpwp = async (req, res) => {
  try {
    const allpwp = await panelpwpoctoberModel.find().select();
    res.status(200).json(allpwp);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

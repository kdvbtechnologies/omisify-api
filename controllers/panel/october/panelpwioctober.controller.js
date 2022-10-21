const panelpwioctoberModel = require("../../../models/panel/october/panelpwioctober.model");

module.exports.addpwi = async (req, res) => {
  const initialize = new panelpwioctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllpwi = async (req, res) => {
  try {
    const allpwi = await panelpwioctoberModel.find().select();
    res.status(200).json(allpwi);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

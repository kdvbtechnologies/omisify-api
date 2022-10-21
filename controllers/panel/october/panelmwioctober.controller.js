const panelmwioctoberModel = require("../../../models/panel/october/panelmwioctober.model");

module.exports.addmwi = async (req, res) => {
  const initialize = new panelmwioctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllmwi = async (req, res) => {
  try {
    const allmwi = await panelmwioctoberModel.find().select();
    res.status(200).json(allmwi);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

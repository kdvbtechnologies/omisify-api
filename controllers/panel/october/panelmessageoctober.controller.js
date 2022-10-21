const panelmessageoctoberModel = require("../../../models/panel/october/panelmessageoctober.model");

module.exports.addmessage = async (req, res) => {
  const initialize = new panelmessageoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllmessage = async (req, res) => {
  try {
    const allmessage = await panelmessageoctoberModel.find().select();
    res.status(200).json(allmessage);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

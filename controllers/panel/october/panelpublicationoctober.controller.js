const panelpublicationoctoberModel = require("../../../models/panel/october/panelpublicationoctober.model");

module.exports.addpublication = async (req, res) => {
  const initialize = new panelpublicationoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllpublication = async (req, res) => {
  try {
    const allpublication = await panelpublicationoctoberModel.find().select();
    res.status(200).json(allpublication);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

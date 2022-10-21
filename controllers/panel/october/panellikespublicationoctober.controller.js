const panellikespublicationoctoberModel = require("../../../models/panel/october/panellikespublicationoctober.model");

module.exports.addlikespublication = async (req, res) => {
  const initialize = new panellikespublicationoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAlllikespublication = async (req, res) => {
  try {
    const alllikespublication = await panellikespublicationoctoberModel
      .find()
      .select();
    res.status(200).json(alllikespublication);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

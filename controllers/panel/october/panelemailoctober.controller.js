const panelemailoctoberModel = require("../../../models/panel/october/panelemailoctober.model");

module.exports.addemail = async (req, res) => {
  const initialize = new panelemailoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllemail = async (req, res) => {
  try {
    const allemail = await panelemailoctoberModel.find().select();
    res.status(200).json(allemail);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

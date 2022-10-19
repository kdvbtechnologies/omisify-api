const panelcommentoctoberModel = require("../../../models/panel/october/panelcommentoctober.model");

module.exports.addComment = async (req, res) => {
  const initialize = new panelcommentoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAllComment = async (req, res) => {
  try {
    const allcomment = await panelcommentoctoberModel.find().select();
    res.status(200).json(allcomment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

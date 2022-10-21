const panellikescommentoctoberModel = require("../../../models/panel/october/panellikescommentoctober.model");

module.exports.addlikescomment = async (req, res) => {
  const initialize = new panellikescommentoctoberModel(req.body);

  try {
    const save = await initialize.save();
    res.status(200).json(save);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.getAlllikescomment = async (req, res) => {
  try {
    const alllikescomment = await panellikescommentoctoberModel.find().select();
    res.status(200).json(alllikescomment);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

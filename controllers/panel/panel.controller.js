const panelModel = require("../../models/panel/panel.model");

module.exports.add = async (req, res) => {
  const addnow = new panelModel(req.body);

  try {
    const savenow = await addnow.save();
    res.status(200).json(savenow);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.all = async (req, res) => {
  try {
    const all = await panelModel.find().select();
    res.status(200).json(all);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.alluser = async (req, res) => {
  try {
    const alluser = await userModel.find().select("-password");
    res.status(200).json(alluser);
  } catch (err) {
    return res.status(500).json(err);
  }
};

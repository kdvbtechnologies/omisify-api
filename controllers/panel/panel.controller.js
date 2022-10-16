const panelModel = require("../../models/panel/panel.model");

module.exports.add = async (req, res) => {
  const addnow = new panelModel(req.body);

  try {
    const savenow = await addnow.save();
    res.status(200).json(savenow);
  } catch (err) {
    return res.status(500).json(err);
  }
};

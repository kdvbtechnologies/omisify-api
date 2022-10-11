const userModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.addUser = async (req, res) => {
  const {
    name,
    partnername,
    username,
    shortname,
    email,
    dateJoin,
    country,
    sex,
  } = req.body;
  try {
    const user = await userModel.create({
      name,
      partnername,
      username,
      shortname,
      email,
      dateJoin,
      country,
      sex,
    });
    res.status(200).json({ message: "Inscription réussi" + user._id });
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports.getUserById = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  try {
    userModel.findById(req.params.id, (err, docs) => {
      if (!err) res.status(200).json(docs);
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

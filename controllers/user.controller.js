const userModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const maxAge = 90 * 24 * 60 * 60 * 1000;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

module.exports.addUser = async (req, res) => {
  const {
    name,
    partnername,
    shortname,
    email,
    password,
    dateJoin,
    country,
    sex,
  } = req.body;
  const user = await userModel.findOne({ email }).exec();
  if (user) {
    return res
      .status(401)
      .json({ message: "Un utilisateur existe déjà avec cette adresse email" });
  }
  const hashedPassword = bcryptjs.hashSync(password);

  try {
    const user = await userModel.create({
      name,
      partnername,
      shortname,
      email,
      password: hashedPassword,
      dateJoin,
      country,
      sex,
    });
    res.status(200).json({ message: "Inscription réussi", id: user._id });
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

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    password,
    pointtcommentsept2022,
    pointtcomment2022,
    pointtcommentlife,
    pointtlifesept2022,
    pointtlife2022,
    pointtlife,

    gaintcommentsept2022,
    gaintcomment2022,
    gaintcommentlife,
    gaintlifesept2022,
    gaintlife2022,
    gaintlife,

    numbertcommentsept2022,
    numbertcomment2022,
    numbertcommentlife,

    date,
    time,
    commentrecent,
  } = req.body;
  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      await user.updateOne({
        password,
        pointtcommentsept2022,
        pointtcomment2022,
        pointtcommentlife,
        pointtlifesept2022,
        pointtlife2022,
        pointtlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        numbertcommentsept2022,
        numbertcomment2022,
        numbertcommentlife,

        date,
        time,
        commentrecent,
      });
      res.status(200).json({
        message: "User Infos updated with success !",
        pointtlifesept2022: user.pointtlifesept2022,
        pointtlife2022: user.pointtlife2022,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).exec();
    if (!user) {
      return res
        .status(401)
        .json({ message: "Email ou mot de passe incorrect !" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch)
      return res
        .status(400)
        .json({ message: "Email ou mot de passe incorrect !!" });

    const token = createToken(user);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ message: "Connexion reussie !", id: user._id });
  } catch (err) {
    res.status(400).json(err);
  }
};

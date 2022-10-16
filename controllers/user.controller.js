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

    // email
    pointtemailsept2022,
    pointtemail2022,
    pointtemaillife,

    gaintemailsept2022,
    gaintemail2022,
    gaintemaillife,

    numbertemailsept2022,
    numbertemail2022,
    numbertemaillife,

    emailrecent,

    // data likecomment
    pointtlikecommentsept2022,
    pointtlikecomment2022,
    pointtlikecommentlife,

    gaintlikecommentsept2022,
    gaintlikecomment2022,
    gaintlikecommentlife,

    numbertlikecommentsept2022,
    numbertlikecomment2022,
    numbertlikecommentlife,

    likecommentrecent,

    // data likepublication
    pointtlikepublicationsept2022,
    pointtlikepublication2022,
    pointtlikepublicationlife,

    gaintlikepublicationsept2022,
    gaintlikepublication2022,
    gaintlikepublicationlife,

    numbertlikepublicationsept2022,
    numbertlikepublication2022,
    numbertlikepublicationlife,

    likepublicationrecent,

    // data m10k
    pointtm10ksept2022,
    pointtm10k2022,
    pointtm10klife,

    gaintm10ksept2022,
    gaintm10k2022,
    gaintm10klife,

    numbertm10ksept2022,
    numbertm10k2022,
    numbertm10klife,

    m10krecent,

    // data message
    pointtmessagesept2022,
    pointtmessage2022,
    pointtmessagelife,

    gaintmessagesept2022,
    gaintmessage2022,
    gaintmessagelife,

    numbertmessagesept2022,
    numbertmessage2022,
    numbertmessagelife,

    messagerecent,

    // data mwi
    pointtmwisept2022,
    pointtmwi2022,
    pointtmwilife,

    gaintmwisept2022,
    gaintmwi2022,
    gaintmwilife,

    numbertmwisept2022,
    numbertmwi2022,
    numbertmwilife,

    mwirecent,

    // data publication
    pointtpublicationsept2022,
    pointtpublication2022,
    pointtpublicationlife,

    gaintpublicationsept2022,
    gaintpublication2022,
    gaintpublicationlife,

    numbertpublicationsept2022,
    numbertpublication2022,
    numbertpublicationlife,

    publicationrecent,

    // data pwi
    pointtpwisept2022,
    pointtpwi2022,
    pointtpwilife,

    gaintpwisept2022,
    gaintpwi2022,
    gaintpwilife,

    numbertpwisept2022,
    numbertpwi2022,
    numbertpwilife,

    pwirecent,
  } = req.body;

  const hashedPassword = bcryptjs.hashSync(password);

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      await user.updateOne({
        password: hashedPassword,
        pointtcommentsept2022,
        pointtcomment2022,
        pointtcommentlife,

        gaintcommentsept2022,
        gaintcomment2022,
        gaintcommentlife,

        numbertcommentsept2022,
        numbertcomment2022,
        numbertcommentlife,

        date,
        time,
        commentrecent,

        pointtlifesept2022,
        pointtlife2022,
        pointtlife,
        gaintlifesept2022,
        gaintlife2022,
        gaintlife,

        // email
        pointtemailsept2022,
        pointtemail2022,
        pointtemaillife,

        gaintemailsept2022,
        gaintemail2022,
        gaintemaillife,

        numbertemailsept2022,
        numbertemail2022,
        numbertemaillife,

        emailrecent,

        // data likecomment
        pointtlikecommentsept2022,
        pointtlikecomment2022,
        pointtlikecommentlife,

        gaintlikecommentsept2022,
        gaintlikecomment2022,
        gaintlikecommentlife,

        numbertlikecommentsept2022,
        numbertlikecomment2022,
        numbertlikecommentlife,

        likecommentrecent,

        // data likepublication
        pointtlikepublicationsept2022,
        pointtlikepublication2022,
        pointtlikepublicationlife,

        gaintlikepublicationsept2022,
        gaintlikepublication2022,
        gaintlikepublicationlife,

        numbertlikepublicationsept2022,
        numbertlikepublication2022,
        numbertlikepublicationlife,

        likepublicationrecent,

        // data m10k
        pointtm10ksept2022,
        pointtm10k2022,
        pointtm10klife,

        gaintm10ksept2022,
        gaintm10k2022,
        gaintm10klife,

        numbertm10ksept2022,
        numbertm10k2022,
        numbertm10klife,

        m10krecent,

        // data message
        pointtmessagesept2022,
        pointtmessage2022,
        pointtmessagelife,

        gaintmessagesept2022,
        gaintmessage2022,
        gaintmessagelife,

        numbertmessagesept2022,
        numbertmessage2022,
        numbertmessagelife,

        messagerecent,

        // data mwi
        pointtmwisept2022,
        pointtmwi2022,
        pointtmwilife,

        gaintmwisept2022,
        gaintmwi2022,
        gaintmwilife,

        numbertmwisept2022,
        numbertmwi2022,
        numbertmwilife,

        mwirecent,

        // data publication
        pointtpublicationsept2022,
        pointtpublication2022,
        pointtpublicationlife,

        gaintpublicationsept2022,
        gaintpublication2022,
        gaintpublicationlife,

        numbertpublicationsept2022,
        numbertpublication2022,
        numbertpublicationlife,

        publicationrecent,

        // data pwi
        pointtpwisept2022,
        pointtpwi2022,
        pointtpwilife,

        gaintpwisept2022,
        gaintpwi2022,
        gaintpwilife,

        numbertpwisept2022,
        numbertpwi2022,
        numbertpwilife,

        pwirecent,
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

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
    userModel
      .findById(req.params.id, (err, docs) => {
        if (!err) res.status(200).json(docs);
      })
      .select("-password");
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports.all = async (req, res) => {
  try {
    const all = await userModel.find().select("-password");
    res.status(200).json(all);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};

module.exports.updateUserInfos = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    name,
    shortname,
    partnername,
    genre,
    age,
    country,
    birthcountry,
    dateofbirth,
    paymentmethod,
    email,
    codewelcome,
    groupwhatsapp,
    grouptelegram,
    numbertelegram,
    numberwhatsapp,

    codewelcomementor,
    welcomebonus,

    // generosity days
    generositydays,
  } = req.body;

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      await user.updateOne({
        name,
        shortname,
        partnername,
        genre,
        age,
        country,
        birthcountry,
        dateofbirth,
        paymentmethod,
        email,
        codewelcome,
        groupwhatsapp,
        grouptelegram,
        numbertelegram,
        numberwhatsapp,

        codewelcomementor,
        welcomebonus,

        // generosity days
        generositydays,
      });
      res.status(200).json({
        message: "User infos updated with success",
        name: user.name,
        generositydays: user.generositydays,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports.updateComment = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    // total life

    pointtlifesept2022,
    pointtlifeoct2022,
    pointtlifenov2022,
    pointtlife2022,
    pointtlife,

    gaintlifesept2022,
    gaintlifeoct2022,
    gaintlifenov2022,
    gaintlife2022,
    gaintlife,

    // comment
    pointtcommentsept2022,
    pointtcommentoct2022,
    pointtcommentnov2022,
    pointtcomment2022,
    pointtcommentlife,

    gaintcommentsept2022,
    gaintcommentoct2022,
    gaintcommentnov2022,
    gaintcomment2022,
    gaintcommentlife,

    numbertcommentsept2022,
    numbertcommentoct2022,
    numbertcommentnov2022,
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
        // total life
        pointtlifesept2022,
        pointtlifeoct2022,
        pointtlifenov2022,
        pointtlife2022,
        pointtlife,

        gaintlifesept2022,
        gaintlifeoct2022,
        gaintlifenov2022,
        gaintlife2022,
        gaintlife,

        // comment
        pointtcommentsept2022,
        pointtcommentoct2022,
        pointtcommentnov2022,
        pointtcomment2022,
        pointtcommentlife,

        gaintcommentsept2022,
        gaintcommentoct2022,
        gaintcommentnov2022,
        gaintcomment2022,
        gaintcommentlife,

        numbertcommentsept2022,
        numbertcommentoct2022,
        numbertcommentnov2022,
        numbertcomment2022,
        numbertcommentlife,

        date,
        time,
        commentrecent,
      });
      res.status(200).json({
        message: "Comment data updated with success !",
        pointtcommentlife: user.pointtcommentlife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update email
// update email
// update email
// update email
// update email
// update email
// update email
// update email
// update email
module.exports.updateemail = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    // total life

    pointtlifesept2022,
    pointtlifeoct2022,
    pointtlifenov2022,
    pointtlife2022,
    pointtlife,

    gaintlifesept2022,
    gaintlifeoct2022,
    gaintlifenov2022,
    gaintlife2022,
    gaintlife,

    // email
    pointtemailsept2022,
    pointtemailoct2022,
    pointtemailnov2022,
    pointtemail2022,
    pointtemaillife,

    gaintemailsept2022,
    gaintemailoct2022,
    gaintemailnov2022,
    gaintemail2022,
    gaintemaillife,

    numbertemailsept2022,
    numbertemailoct2022,
    numbertemailnov2022,
    numbertemail2022,
    numbertemaillife,

    date,
    time,
    emailrecent,
  } = req.body;

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      await user.updateOne({
        // total life
        pointtlifesept2022,
        pointtlifeoct2022,
        pointtlifenov2022,
        pointtlife2022,
        pointtlife,

        gaintlifesept2022,
        gaintlifeoct2022,
        gaintlifenov2022,
        gaintlife2022,
        gaintlife,

        // email
        pointtemailsept2022,
        pointtemailoct2022,
        pointtemailnov2022,
        pointtemail2022,
        pointtemaillife,

        gaintemailsept2022,
        gaintemailoct2022,
        gaintemailnov2022,
        gaintemail2022,
        gaintemaillife,

        numbertemailsept2022,
        numbertemailoct2022,
        numbertemailnov2022,
        numbertemail2022,
        numbertemaillife,

        date,
        time,
        emailrecent,
      });
      res.status(200).json({
        message: "email data updated with success !",
        pointtemaillife: user.pointtemaillife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID unknown : " + req.params.id);

  const {
    codewelcomementor,
    password,

    pointtlifeoct2022,
    pointtlife2022,
    pointtlife,

    gaintlifeoct2022,
    gaintlife2022,
    gaintlife,

    pointtcommentoct2022,
    pointtcomment2022,
    pointtcommentlife,

    gaintcommentoct2022,
    gaintcomment2022,
    gaintcommentlife,

    numbertcommentoct2022,
    numbertcomment2022,
    numbertcommentlife,

    date,
    time,
    commentrecent,

    // email
    pointtemailoct2022,
    pointtemail2022,
    pointtemaillife,

    gaintemailoct2022,
    gaintemail2022,
    gaintemaillife,

    numbertemailoct2022,
    numbertemail2022,
    numbertemaillife,

    emailrecent,

    // data likecomment
    pointtlikecommentoct2022,
    pointtlikecomment2022,
    pointtlikecommentlife,

    gaintlikecommentoct2022,
    gaintlikecomment2022,
    gaintlikecommentlife,

    numbertlikecommentoct2022,
    numbertlikecomment2022,
    numbertlikecommentlife,

    likecommentrecent,

    // data likepublication
    pointtlikepublicationoct2022,
    pointtlikepublication2022,
    pointtlikepublicationlife,

    gaintlikepublicationoct2022,
    gaintlikepublication2022,
    gaintlikepublicationlife,

    numbertlikepublicationoct2022,
    numbertlikepublication2022,
    numbertlikepublicationlife,

    likepublicationrecent,

    // data m10k
    pointtm10koct2022,
    pointtm10k2022,
    pointtm10klife,

    gaintm10koct2022,
    gaintm10k2022,
    gaintm10klife,

    numbertm10koct2022,
    numbertm10k2022,
    numbertm10klife,

    m10krecent,

    // data message
    pointtmessageoct2022,
    pointtmessage2022,
    pointtmessagelife,

    gaintmessageoct2022,
    gaintmessage2022,
    gaintmessagelife,

    numbertmessageoct2022,
    numbertmessage2022,
    numbertmessagelife,

    messagerecent,

    // data mwi
    pointtmwioct2022,
    pointtmwi2022,
    pointtmwilife,

    gaintmwioct2022,
    gaintmwi2022,
    gaintmwilife,

    numbertmwioct2022,
    numbertmwi2022,
    numbertmwilife,

    mwirecent,

    // data publication
    pointtpublicationoct2022,
    pointtpublication2022,
    pointtpublicationlife,

    gaintpublicationoct2022,
    gaintpublication2022,
    gaintpublicationlife,

    numbertpublicationoct2022,
    numbertpublication2022,
    numbertpublicationlife,

    publicationrecent,

    // data pwi
    pointtpwioct2022,
    pointtpwi2022,
    pointtpwilife,

    gaintpwioct2022,
    gaintpwi2022,
    gaintpwilife,

    numbertpwioct2022,
    numbertpwi2022,
    numbertpwilife,

    pwirecent,
  } = req.body;

  const hashedPassword = bcryptjs.hashSync(password);

  try {
    const user = await userModel.findById(req.params.id);
    if (user.userId === req.body.userId) {
      await user.updateOne({
        codewelcomementor,
        password: hashedPassword,
        pointtcommentoct2022,
        pointtcomment2022,
        pointtcommentlife,

        gaintcommentoct2022,
        gaintcomment2022,
        gaintcommentlife,

        numbertcommentoct2022,
        numbertcomment2022,
        numbertcommentlife,

        date,
        time,
        commentrecent,

        pointtlifeoct2022,
        pointtlife2022,
        pointtlife,
        gaintlifeoct2022,
        gaintlife2022,
        gaintlife,

        // email
        pointtemailoct2022,
        pointtemail2022,
        pointtemaillife,

        gaintemailoct2022,
        gaintemail2022,
        gaintemaillife,

        numbertemailoct2022,
        numbertemail2022,
        numbertemaillife,

        emailrecent,

        // data likecomment
        pointtlikecommentoct2022,
        pointtlikecomment2022,
        pointtlikecommentlife,

        gaintlikecommentoct2022,
        gaintlikecomment2022,
        gaintlikecommentlife,

        numbertlikecommentoct2022,
        numbertlikecomment2022,
        numbertlikecommentlife,

        likecommentrecent,

        // data likepublication
        pointtlikepublicationoct2022,
        pointtlikepublication2022,
        pointtlikepublicationlife,

        gaintlikepublicationoct2022,
        gaintlikepublication2022,
        gaintlikepublicationlife,

        numbertlikepublicationoct2022,
        numbertlikepublication2022,
        numbertlikepublicationlife,

        likepublicationrecent,

        // data m10k
        pointtm10koct2022,
        pointtm10k2022,
        pointtm10klife,

        gaintm10koct2022,
        gaintm10k2022,
        gaintm10klife,

        numbertm10koct2022,
        numbertm10k2022,
        numbertm10klife,

        m10krecent,

        // data message
        pointtmessageoct2022,
        pointtmessage2022,
        pointtmessagelife,

        gaintmessageoct2022,
        gaintmessage2022,
        gaintmessagelife,

        numbertmessageoct2022,
        numbertmessage2022,
        numbertmessagelife,

        messagerecent,

        // data mwi
        pointtmwioct2022,
        pointtmwi2022,
        pointtmwilife,

        gaintmwioct2022,
        gaintmwi2022,
        gaintmwilife,

        numbertmwioct2022,
        numbertmwi2022,
        numbertmwilife,

        mwirecent,

        // data publication
        pointtpublicationoct2022,
        pointtpublication2022,
        pointtpublicationlife,

        gaintpublicationoct2022,
        gaintpublication2022,
        gaintpublicationlife,

        numbertpublicationoct2022,
        numbertpublication2022,
        numbertpublicationlife,

        publicationrecent,

        // data pwi
        pointtpwioct2022,
        pointtpwi2022,
        pointtpwilife,

        gaintpwioct2022,
        gaintpwi2022,
        gaintpwilife,

        numbertpwioct2022,
        numbertpwi2022,
        numbertpwilife,

        pwirecent,
      });
      res.status(200).json({
        message: "Password updated with success !",
        pointtcommentlife: user.pointtcommentlife,
        name: user.name,
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
    res.status(200).json({
      message: "Connexion reussie !",
      id: user._id,
      shortname: user.shortname,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};

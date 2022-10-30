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
	accesscode,
	gdb,

    // generosity days
    generositydays,
    generositydaysbonus,

    // best partner bonus
    bestpartnerbonus,

    // life
    pointtlife,
    gaintlife,
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
		accesscode,
		gdb,

        // generosity days
        generositydays,
        generositydaysbonus,

        // best partner bonus
        bestpartnerbonus,

        // life
        pointtlife,
        gaintlife,
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
	numbercommententeradmin,
	statuscomment,
	gdb,
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
		numbercommententeradmin,
		statuscomment,
		gdb,
      });
      res.status(200).json({
        message: "Success !",
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

// update e10k
// update e10k
// update e10k
// update e10k
// update e10k
// update e10k
// update e10k
// update e10k
// update e10k
module.exports.updatee10k = async (req, res) => {
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

    // e10k
    pointte10ksept2022,
    pointte10koct2022,
    pointte10knov2022,
    pointte10k2022,
    pointte10klife,

    gainte10ksept2022,
    gainte10koct2022,
    gainte10knov2022,
    gainte10k2022,
    gainte10klife,

    numberte10ksept2022,
    numberte10koct2022,
    numberte10knov2022,
    numberte10k2022,
    numberte10klife,

    date,
    time,
    e10krecent,
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

        // e10k
        pointte10ksept2022,
        pointte10koct2022,
        pointte10knov2022,
        pointte10k2022,
        pointte10klife,

        gainte10ksept2022,
        gainte10koct2022,
        gainte10knov2022,
        gainte10k2022,
        gainte10klife,

        numberte10ksept2022,
        numberte10koct2022,
        numberte10knov2022,
        numberte10k2022,
        numberte10klife,

        date,
        time,
        e10krecent,
      });
      res.status(200).json({
        message: "e10k data updated with success !",
        pointte10klife: user.pointte10klife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update likescomment
// update likescomment
// update likescomment
// update likescomment
// update likescomment
// update likescomment
// update likescomment
// update likescomment
// update likescomment
module.exports.updatelikescomment = async (req, res) => {
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

    // likescomment
    pointtlikescommentsept2022,
    pointtlikescommentoct2022,
    pointtlikescommentnov2022,
    pointtlikescomment2022,
    pointtlikescommentlife,

    gaintlikescommentsept2022,
    gaintlikescommentoct2022,
    gaintlikescommentnov2022,
    gaintlikescomment2022,
    gaintlikescommentlife,

    numbertlikescommentsept2022,
    numbertlikescommentoct2022,
    numbertlikescommentnov2022,
    numbertlikescomment2022,
    numbertlikescommentlife,

    date,
    time,
    likescommentrecent,
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

        // likescomment
        pointtlikescommentsept2022,
        pointtlikescommentoct2022,
        pointtlikescommentnov2022,
        pointtlikescomment2022,
        pointtlikescommentlife,

        gaintlikescommentsept2022,
        gaintlikescommentoct2022,
        gaintlikescommentnov2022,
        gaintlikescomment2022,
        gaintlikescommentlife,

        numbertlikescommentsept2022,
        numbertlikescommentoct2022,
        numbertlikescommentnov2022,
        numbertlikescomment2022,
        numbertlikescommentlife,

        date,
        time,
        likescommentrecent,
      });
      res.status(200).json({
        message: "likescomment data updated with success !",
        pointtlikescommentlife: user.pointtlikescommentlife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update likespublication
// update likespublication
// update likespublication
// update likespublication
// update likespublication
// update likespublication
// update likespublication
// update likespublication
// update likespublication
module.exports.updatelikespublication = async (req, res) => {
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

    // likespublication
    pointtlikespublicationsept2022,
    pointtlikespublicationoct2022,
    pointtlikespublicationnov2022,
    pointtlikespublication2022,
    pointtlikespublicationlife,

    gaintlikespublicationsept2022,
    gaintlikespublicationoct2022,
    gaintlikespublicationnov2022,
    gaintlikespublication2022,
    gaintlikespublicationlife,

    numbertlikespublicationsept2022,
    numbertlikespublicationoct2022,
    numbertlikespublicationnov2022,
    numbertlikespublication2022,
    numbertlikespublicationlife,

    date,
    time,
    likespublicationrecent,
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

        // likespublication
        pointtlikespublicationsept2022,
        pointtlikespublicationoct2022,
        pointtlikespublicationnov2022,
        pointtlikespublication2022,
        pointtlikespublicationlife,

        gaintlikespublicationsept2022,
        gaintlikespublicationoct2022,
        gaintlikespublicationnov2022,
        gaintlikespublication2022,
        gaintlikespublicationlife,

        numbertlikespublicationsept2022,
        numbertlikespublicationoct2022,
        numbertlikespublicationnov2022,
        numbertlikespublication2022,
        numbertlikespublicationlife,

        date,
        time,
        likespublicationrecent,
      });
      res.status(200).json({
        message: "likespublication data updated with success !",
        pointtlikespublicationlife: user.pointtlikespublicationlife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update m10k
// update m10k
// update m10k
// update m10k
// update m10k
// update m10k
// update m10k
// update m10k
// update m10k
module.exports.updatem10k = async (req, res) => {
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

    // m10k
    pointtm10ksept2022,
    pointtm10koct2022,
    pointtm10knov2022,
    pointtm10k2022,
    pointtm10klife,

    gaintm10ksept2022,
    gaintm10koct2022,
    gaintm10knov2022,
    gaintm10k2022,
    gaintm10klife,

    numbertm10ksept2022,
    numbertm10koct2022,
    numbertm10knov2022,
    numbertm10k2022,
    numbertm10klife,

    date,
    time,
    m10krecent,
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

        // m10k
        pointtm10ksept2022,
        pointtm10koct2022,
        pointtm10knov2022,
        pointtm10k2022,
        pointtm10klife,

        gaintm10ksept2022,
        gaintm10koct2022,
        gaintm10knov2022,
        gaintm10k2022,
        gaintm10klife,

        numbertm10ksept2022,
        numbertm10koct2022,
        numbertm10knov2022,
        numbertm10k2022,
        numbertm10klife,

        date,
        time,
        m10krecent,
      });
      res.status(200).json({
        message: "m10k data updated with success !",
        pointtm10klife: user.pointtm10klife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update message
// update message
// update message
// update message
// update message
// update message
// update message
// update message
// update message
module.exports.updatemessage = async (req, res) => {
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

    // message
    pointtmessagesept2022,
    pointtmessageoct2022,
    pointtmessagenov2022,
    pointtmessage2022,
    pointtmessagelife,

    gaintmessagesept2022,
    gaintmessageoct2022,
    gaintmessagenov2022,
    gaintmessage2022,
    gaintmessagelife,

    numbertmessagesept2022,
    numbertmessageoct2022,
    numbertmessagenov2022,
    numbertmessage2022,
    numbertmessagelife,

    date,
    time,
    messagerecent,
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

        // message
        pointtmessagesept2022,
        pointtmessageoct2022,
        pointtmessagenov2022,
        pointtmessage2022,
        pointtmessagelife,

        gaintmessagesept2022,
        gaintmessageoct2022,
        gaintmessagenov2022,
        gaintmessage2022,
        gaintmessagelife,

        numbertmessagesept2022,
        numbertmessageoct2022,
        numbertmessagenov2022,
        numbertmessage2022,
        numbertmessagelife,

        date,
        time,
        messagerecent,
      });
      res.status(200).json({
        message: "message data updated with success !",
        pointtmessagelife: user.pointtmessagelife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update mwi
// update mwi
// update mwi
// update mwi
// update mwi
// update mwi
// update mwi
// update mwi
// update mwi
module.exports.updatemwi = async (req, res) => {
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

    // mwi
    pointtmwisept2022,
    pointtmwioct2022,
    pointtmwinov2022,
    pointtmwi2022,
    pointtmwilife,

    gaintmwisept2022,
    gaintmwioct2022,
    gaintmwinov2022,
    gaintmwi2022,
    gaintmwilife,

    numbertmwisept2022,
    numbertmwioct2022,
    numbertmwinov2022,
    numbertmwi2022,
    numbertmwilife,

    date,
    time,
    mwirecent,
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

        // mwi
        pointtmwisept2022,
        pointtmwioct2022,
        pointtmwinov2022,
        pointtmwi2022,
        pointtmwilife,

        gaintmwisept2022,
        gaintmwioct2022,
        gaintmwinov2022,
        gaintmwi2022,
        gaintmwilife,

        numbertmwisept2022,
        numbertmwioct2022,
        numbertmwinov2022,
        numbertmwi2022,
        numbertmwilife,

        date,
        time,
        mwirecent,
      });
      res.status(200).json({
        mwi: "mwi data updated with success !",
        pointtmwilife: user.pointtmwilife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update publication
// update publication
// update publication
// update publication
// update publication
// update publication
// update publication
// update publication
// update publication
module.exports.updatepublication = async (req, res) => {
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

    // publication
    pointtpublicationsept2022,
    pointtpublicationoct2022,
    pointtpublicationnov2022,
    pointtpublication2022,
    pointtpublicationlife,

    gaintpublicationsept2022,
    gaintpublicationoct2022,
    gaintpublicationnov2022,
    gaintpublication2022,
    gaintpublicationlife,

    numbertpublicationsept2022,
    numbertpublicationoct2022,
    numbertpublicationnov2022,
    numbertpublication2022,
    numbertpublicationlife,

    date,
    time,
    publicationrecent,
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

        // publication
        pointtpublicationsept2022,
        pointtpublicationoct2022,
        pointtpublicationnov2022,
        pointtpublication2022,
        pointtpublicationlife,

        gaintpublicationsept2022,
        gaintpublicationoct2022,
        gaintpublicationnov2022,
        gaintpublication2022,
        gaintpublicationlife,

        numbertpublicationsept2022,
        numbertpublicationoct2022,
        numbertpublicationnov2022,
        numbertpublication2022,
        numbertpublicationlife,

        date,
        time,
        publicationrecent,
      });
      res.status(200).json({
        publication: "publication data updated with success !",
        pointtpublicationlife: user.pointtpublicationlife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update pwi
// update pwi
// update pwi
// update pwi
// update pwi
// update pwi
// update pwi
// update pwi
// update pwi
module.exports.updatepwi = async (req, res) => {
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

    // pwi
    pointtpwisept2022,
    pointtpwioct2022,
    pointtpwinov2022,
    pointtpwi2022,
    pointtpwilife,

    gaintpwisept2022,
    gaintpwioct2022,
    gaintpwinov2022,
    gaintpwi2022,
    gaintpwilife,

    numbertpwisept2022,
    numbertpwioct2022,
    numbertpwinov2022,
    numbertpwi2022,
    numbertpwilife,

    date,
    time,
    pwirecent,
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

        // pwi
        pointtpwisept2022,
        pointtpwioct2022,
        pointtpwinov2022,
        pointtpwi2022,
        pointtpwilife,

        gaintpwisept2022,
        gaintpwioct2022,
        gaintpwinov2022,
        gaintpwi2022,
        gaintpwilife,

        numbertpwisept2022,
        numbertpwioct2022,
        numbertpwinov2022,
        numbertpwi2022,
        numbertpwilife,

        date,
        time,
        pwirecent,
      });
      res.status(200).json({
        pwi: "pwi data updated with success !",
        pointtpwilife: user.pointtpwilife,
        name: user.name,
        codewelcomementor: user.codewelcomementor,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// update pwp
// update pwp
// update pwp
// update pwp
// update pwp
// update pwp
// update pwp
// update pwp
// update pwp
module.exports.updatepwp = async (req, res) => {
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

    // pwp
    pointtpwpsept2022,
    pointtpwpoct2022,
    pointtpwpnov2022,
    pointtpwp2022,
    pointtpwplife,

    gaintpwpsept2022,
    gaintpwpoct2022,
    gaintpwpnov2022,
    gaintpwp2022,
    gaintpwplife,

    numbertpwpsept2022,
    numbertpwpoct2022,
    numbertpwpnov2022,
    numbertpwp2022,
    numbertpwplife,

    date,
    time,
    pwprecent,
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

        // pwp
        pointtpwpsept2022,
        pointtpwpoct2022,
        pointtpwpnov2022,
        pointtpwp2022,
        pointtpwplife,

        gaintpwpsept2022,
        gaintpwpoct2022,
        gaintpwpnov2022,
        gaintpwp2022,
        gaintpwplife,

        numbertpwpsept2022,
        numbertpwpoct2022,
        numbertpwpnov2022,
        numbertpwp2022,
        numbertpwplife,

        date,
        time,
        pwprecent,
      });
      res.status(200).json({
        pwp: "pwp data updated with success !",
        pointtpwplife: user.pointtpwplife,
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

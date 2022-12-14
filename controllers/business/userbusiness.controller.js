const userbusinessModel = require("../../models/business/userbusiness.model");
const bcryptjs = require("bcryptjs");

module.exports.addEnterprise = async (req, res) => {
  const {
    namebusiness,
    shortnamebusiness,
    principalnamebusiness,
    emailbusiness,
    passwordbusiness,
  } = req.body;

  const userbusiness = await userbusinessModel
    .findOne({ emailbusiness })
    .exec();

  if (userbusiness) {
    return res.status(401).json({
      message: "Un utilisateur existe déjà avec cette adresse e-mail",
    });
  }

  const hashedPassword = bcryptjs.hashSync(passwordbusiness);

  try {
    const userbusiness = await userbusinessModel.create({
      namebusiness,
      shortnamebusiness,
      principalnamebusiness,
      emailbusiness,
      passwordbusiness: hashedPassword,
    });
    res
      .status(200)
      .json({ message: "Inscription réussie", id: userbusiness._id });
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

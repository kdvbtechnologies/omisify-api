const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    partnername: {
      type: String,
      unique: true,
    },

    shortname: {
      type: String,
    },

    sex: {
      type: String,
    },

    country: {
      type: String,
    },

    /*
    desc: {
      type: String,
      max: 500,
    },*/

    dateJoin: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },

    nbretcommentsept2022: {
      type: String,
    },

    pointtcommentsept2022: {
      type: String,
    },

    gaintcommentsept2022: {
      type: String,
    },

    gain: {
      type: String,
    },

    pointtsept2022: {
      type: String,
    },

    gaintsept2022: {
      type: String,
    },

    datedernieremajpage: {
      type: String,
    },

    // ceux ci-dessous ne sont pas utile pour l'instant
    idtsept2022: {
      type: String,
    },

    idtoct2022: {
      type: String,
    },

    idtnov2022: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

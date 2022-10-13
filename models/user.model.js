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
    },

    idtsept: {
      type: String,
    },

    idtoct: {
      type: String,
    },

    idtnov: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

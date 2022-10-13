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
    },

    idtotal: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

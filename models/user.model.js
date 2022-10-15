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

    // comment
    // comment
    // comment

    // point
    pointtcommentsept2022: {
      type: String,
    },

    pointtcomment2022: {
      type: String,
    },

    pointtcommentlife: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    gaintcommentsept2022: {
      type: String,
    },

    gaintcomment2022: {
      type: String,
    },

    gaintcommentlife: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    numbertcommentsept2022: {
      type: String,
    },

    numbertcomment2022: {
      type: String,
    },

    numbertcommentlife: {
      type: String,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },

    commentrecent: {
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

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // user infos
    // user infos
    // user infos
    // user infos
    // user infos
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

    codewelcomementor: {
      type: String,
    },

    codewelcome: {
      type: String,
    },

    welcomebonus: {
      type: String,
    },

    codewelcomebonus: {
      type: String,
    },

    generositydays: {
      type: String,
    },

    paymentmethod: {
      type: String,
    },

    birthcountry: {
      type: String,
    },

    dateofbirth: {
      type: String,
    },

    genre: {
      type: String,
    },

    country: {
      type: String,
    },

    age: {
      type: String,
    },

    groupwhatsapp: {
      type: String,
    },

    grouptelegram: {
      type: String,
    },

    numberwhatsapp: {
      type: String,
    },

    numbertelegram: {
      type: String,
    },

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
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment

    // point
    // point
    // point
    pointtcommentsept2022: {
      type: String,
    },

    pointtcommentoct2022: {
      type: String,
    },

    pointtcommentnov2022: {
      type: String,
    },

    pointtcomment2022: {
      type: String,
    },

    pointtcommentlife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintcommentsept2022: {
      type: String,
    },

    gaintcommentoct2022: {
      type: String,
    },

    gaintcommentnov2022: {
      type: String,
    },

    gaintcomment2022: {
      type: String,
    },

    gaintcommentlife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertcommentsept2022: {
      type: String,
    },

    numbertcommentoct2022: {
      type: String,
    },

    numbertcommentnov2022: {
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

    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email

    // point
    // point
    // point
    pointtemailsept2022: {
      type: String,
    },

    pointtemailoct2022: {
      type: String,
    },

    pointtemailnov2022: {
      type: String,
    },

    pointtemail2022: {
      type: String,
    },

    pointtemaillife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintemailsept2022: {
      type: String,
    },

    gaintemailoct2022: {
      type: String,
    },

    gaintemailnov2022: {
      type: String,
    },

    gaintemail2022: {
      type: String,
    },

    gaintemaillife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertemailsept2022: {
      type: String,
    },

    numbertemailoct2022: {
      type: String,
    },

    numbertemailnov2022: {
      type: String,
    },

    numbertemail2022: {
      type: String,
    },

    numbertemaillife: {
      type: String,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },

    emailrecent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

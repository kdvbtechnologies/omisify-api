const mongoose = require("mongoose");

const PanelemailOctoberSchema = new mongoose.Schema(
  {
    // user infos
    userId: {
      type: String,
    },

    name: {
      type: String,
    },

    partnername: {
      type: String,
    },

    shortname: {
      type: String,
    },

    // number
    numbertemaillife: {
      type: String,
    },

    numbertemail2022: {
      type: String,
    },

    numbertemailoct2022: {
      type: String,
    },

    // point
    pointtemaillife: {
      type: String,
    },

    pointtemail2022: {
      type: String,
    },

    pointtemailoct2022: {
      type: String,
    },

    // gain
    gaintemaillife: {
      type: String,
    },

    gaintemail2022: {
      type: String,
    },

    gaintemailoct2022: {
      type: String,
    },

    resultgainemail: {
      type: String,
    },

    resultpointemail: {
      type: String,
    },

    // life
    pointtlife: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    // others
    emailrecent: {
      type: String,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PanelemailOctober2022",
  PanelemailOctoberSchema
);

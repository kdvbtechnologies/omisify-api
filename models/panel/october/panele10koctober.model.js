const mongoose = require("mongoose");

const Panele10kOctoberSchema = new mongoose.Schema(
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
    numberte10klife: {
      type: String,
    },

    numberte10k2022: {
      type: String,
    },

    numberte10koct2022: {
      type: String,
    },

    // point
    pointte10klife: {
      type: String,
    },

    pointte10k2022: {
      type: String,
    },

    pointte10koct2022: {
      type: String,
    },

    // gain
    gainte10klife: {
      type: String,
    },

    gainte10k2022: {
      type: String,
    },

    gainte10koct2022: {
      type: String,
    },

    resultgaine10k: {
      type: String,
    },

    resultpointe10k: {
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
    e10krecent: {
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

module.exports = mongoose.model("Panele10kOctober2022", Panele10kOctoberSchema);

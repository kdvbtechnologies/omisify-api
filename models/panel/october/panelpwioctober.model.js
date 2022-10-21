const mongoose = require("mongoose");

const PanelpwiOctoberSchema = new mongoose.Schema(
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
    numbertpwilife: {
      type: String,
    },

    numbertpwi2022: {
      type: String,
    },

    numbertpwioct2022: {
      type: String,
    },

    // point
    pointtpwilife: {
      type: String,
    },

    pointtpwi2022: {
      type: String,
    },

    pointtpwioct2022: {
      type: String,
    },

    // gain
    gaintpwilife: {
      type: String,
    },

    gaintpwi2022: {
      type: String,
    },

    gaintpwioct2022: {
      type: String,
    },

    resultgainpwi: {
      type: String,
    },

    resultpointpwi: {
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
    pwirecent: {
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

module.exports = mongoose.model("PanelpwiOctober2022", PanelpwiOctoberSchema);

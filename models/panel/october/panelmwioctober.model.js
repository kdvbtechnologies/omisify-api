const mongoose = require("mongoose");

const PanelmwiOctoberSchema = new mongoose.Schema(
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
    numbertmwilife: {
      type: String,
    },

    numbertmwi2022: {
      type: String,
    },

    numbertmwioct2022: {
      type: String,
    },

    // point
    pointtmwilife: {
      type: String,
    },

    pointtmwi2022: {
      type: String,
    },

    pointtmwioct2022: {
      type: String,
    },

    // gain
    gaintmwilife: {
      type: String,
    },

    gaintmwi2022: {
      type: String,
    },

    gaintmwioct2022: {
      type: String,
    },

    resultgainmwi: {
      type: String,
    },

    resultpointmwi: {
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
    mwirecent: {
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

module.exports = mongoose.model("PanelmwiOctober2022", PanelmwiOctoberSchema);

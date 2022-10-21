const mongoose = require("mongoose");

const Panelm10kOctoberSchema = new mongoose.Schema(
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
    numbertm10klife: {
      type: String,
    },

    numbertm10k2022: {
      type: String,
    },

    numbertm10koct2022: {
      type: String,
    },

    // point
    pointtm10klife: {
      type: String,
    },

    pointtm10k2022: {
      type: String,
    },

    pointtm10koct2022: {
      type: String,
    },

    // gain
    gaintm10klife: {
      type: String,
    },

    gaintm10k2022: {
      type: String,
    },

    gaintm10koct2022: {
      type: String,
    },

    resultgainm10k: {
      type: String,
    },

    resultpointm10k: {
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
    m10krecent: {
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

module.exports = mongoose.model("Panelm10kOctober2022", Panelm10kOctoberSchema);

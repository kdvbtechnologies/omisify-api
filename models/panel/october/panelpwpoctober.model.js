const mongoose = require("mongoose");

const PanelpwpOctoberSchema = new mongoose.Schema(
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
    numbertpwplife: {
      type: String,
    },

    numbertpwp2022: {
      type: String,
    },

    numbertpwpoct2022: {
      type: String,
    },

    // point
    pointtpwplife: {
      type: String,
    },

    pointtpwp2022: {
      type: String,
    },

    pointtpwpoct2022: {
      type: String,
    },

    // gain
    gaintpwplife: {
      type: String,
    },

    gaintpwp2022: {
      type: String,
    },

    gaintpwpoct2022: {
      type: String,
    },

    resultgainpwp: {
      type: String,
    },

    resultpointpwp: {
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
    pwprecent: {
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

module.exports = mongoose.model("PanelpwpOctober2022", PanelpwpOctoberSchema);

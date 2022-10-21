const mongoose = require("mongoose");

const PanellikescommentOctoberSchema = new mongoose.Schema(
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
    numbertlikescommentlife: {
      type: String,
    },

    numbertlikescomment2022: {
      type: String,
    },

    numbertlikescommentoct2022: {
      type: String,
    },

    // point
    pointtlikescommentlife: {
      type: String,
    },

    pointtlikescomment2022: {
      type: String,
    },

    pointtlikescommentoct2022: {
      type: String,
    },

    // gain
    gaintlikescommentlife: {
      type: String,
    },

    gaintlikescomment2022: {
      type: String,
    },

    gaintlikescommentoct2022: {
      type: String,
    },

    resultgainlikescomment: {
      type: String,
    },

    resultpointlikescomment: {
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
    likescommentrecent: {
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
  "PanellikescommentOctober2022",
  PanellikescommentOctoberSchema
);

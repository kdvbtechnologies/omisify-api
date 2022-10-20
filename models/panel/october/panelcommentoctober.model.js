const mongoose = require("mongoose");

const PanelCommentOctoberSchema = new mongoose.Schema(
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
    numbertcommentlife: {
      type: String,
    },

    numbertcomment2022: {
      type: String,
    },

    numbertcommentoct2022: {
      type: String,
    },

    // point
    pointtcommentlife: {
      type: String,
    },

    pointtcomment2022: {
      type: String,
    },

    pointtcommentoct2022: {
      type: String,
    },

    // gain
    gaintcommentlife: {
      type: String,
    },

    gaintcomment2022: {
      type: String,
    },

    gaintcommentoct2022: {
      type: String,
    },

    resultgaincomment: {
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
    commentrecent: {
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
  "PanelCommentOctober2022",
  PanelCommentOctoberSchema
);

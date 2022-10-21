const mongoose = require("mongoose");

const PanelmessageOctoberSchema = new mongoose.Schema(
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
    numbertmessagelife: {
      type: String,
    },

    numbertmessage2022: {
      type: String,
    },

    numbertmessageoct2022: {
      type: String,
    },

    // point
    pointtmessagelife: {
      type: String,
    },

    pointtmessage2022: {
      type: String,
    },

    pointtmessageoct2022: {
      type: String,
    },

    // gain
    gaintmessagelife: {
      type: String,
    },

    gaintmessage2022: {
      type: String,
    },

    gaintmessageoct2022: {
      type: String,
    },

    resultgainmessage: {
      type: String,
    },

    resultpointmessage: {
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
    messagerecent: {
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
  "PanelmessageOctober2022",
  PanelmessageOctoberSchema
);

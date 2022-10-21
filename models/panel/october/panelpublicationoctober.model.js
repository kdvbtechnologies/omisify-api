const mongoose = require("mongoose");

const PanelpublicationOctoberSchema = new mongoose.Schema(
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
    numbertpublicationlife: {
      type: String,
    },

    numbertpublication2022: {
      type: String,
    },

    numbertpublicationoct2022: {
      type: String,
    },

    // point
    pointtpublicationlife: {
      type: String,
    },

    pointtpublication2022: {
      type: String,
    },

    pointtpublicationoct2022: {
      type: String,
    },

    // gain
    gaintpublicationlife: {
      type: String,
    },

    gaintpublication2022: {
      type: String,
    },

    gaintpublicationoct2022: {
      type: String,
    },

    resultgainpublication: {
      type: String,
    },

    resultpointpublication: {
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
    publicationrecent: {
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
  "PanelpublicationOctober2022",
  PanelpublicationOctoberSchema
);

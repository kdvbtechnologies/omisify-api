const mongoose = require("mongoose");

const PanellikespublicationOctoberSchema = new mongoose.Schema(
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
    numbertlikespublicationlife: {
      type: String,
    },

    numbertlikespublication2022: {
      type: String,
    },

    numbertlikespublicationoct2022: {
      type: String,
    },

    // point
    pointtlikespublicationlife: {
      type: String,
    },

    pointtlikespublication2022: {
      type: String,
    },

    pointtlikespublicationoct2022: {
      type: String,
    },

    // gain
    gaintlikespublicationlife: {
      type: String,
    },

    gaintlikespublication2022: {
      type: String,
    },

    gaintlikespublicationoct2022: {
      type: String,
    },

    resultgainlikespublication: {
      type: String,
    },

    resultpointlikespublication: {
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
    likespublicationrecent: {
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
  "PanellikespublicationOctober2022",
  PanellikespublicationOctoberSchema
);

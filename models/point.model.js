const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    cSeptember2022: {
      type: String,
    },

    dSeptember2022: {
      type: String,
    },

    cOctober2022: {
      type: String,
    },

    dOctober2022: {
      type: String,
    },

    cNovember2022: {
      type: String,
    },

    dNovember2022: {
      type: String,
    },

    cDecember2022: {
      type: String,
    },

    dDecember2022: {
      type: String,
    },

    cJanuary2023: {
      type: String,
    },

    dJanuary2023: {
      type: String,
    },

    cfebruary2023: {
      type: String,
    },

    dfebruary2023: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Point", PointSchema);

const mongoose = require("mongoose");

const OctoberSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    cOctober: {
      type: String,
    },

    dOctober: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("October2022", OctoberSchema);

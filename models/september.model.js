const mongoose = require("mongoose");

const SeptemberSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    cSeptember: {
      type: String,
    },

    dSeptember: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("September2022", SeptemberSchema);

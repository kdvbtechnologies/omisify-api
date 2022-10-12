const mongoose = require("mongoose");

const tOctoberSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    total: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("tOctober2022", tOctoberSchema);

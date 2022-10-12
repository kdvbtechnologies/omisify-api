const mongoose = require("mongoose");

const tSeptemberSchema = new mongoose.Schema(
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

module.exports = mongoose.model("tSeptember2022", tSeptemberSchema);

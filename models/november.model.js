const mongoose = require("mongoose");

const NovemberSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    cNovember: {
      type: String,
    },

    dNovember: {
      type: String,
    },

    total: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("November2022", NovemberSchema);

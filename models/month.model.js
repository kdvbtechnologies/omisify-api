const mongoose = require("mongoose");

const MonthSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    month: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Month", MonthSchema);

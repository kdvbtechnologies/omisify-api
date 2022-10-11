const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    monthId: {
      type: String,
    },

    pcomments: {
      type: String,
    },

    date: {
      type: String,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Point", PointSchema);

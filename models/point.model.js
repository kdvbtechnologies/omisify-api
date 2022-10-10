const mongoose = require("mongoose");

const PointSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    postId: {
      type: String,
    },

    points: {
      type: String,
    },

    date: {
      type: String,
    },

    pointsTotal: {
      type: String,
    },

    newPoint: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Point", PointSchema);

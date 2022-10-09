const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    desc: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

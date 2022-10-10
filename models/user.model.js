const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    name: {
      type: String,
    },

    sex: {
      type: String,
    },

    country: {
      type: String,
    },

    /*
    desc: {
      type: String,
      max: 500,
    },*/

    dateJoin: {
      type: String,
    },

    email: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);

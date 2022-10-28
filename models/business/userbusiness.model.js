const mongoose = require("mongoose");

const UserBusinessSchema = new mongoose.Schema(
  {
    namebusiness: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    shortnamebusiness: {
      type: String,
    },

    principalnamebusiness: {
      type: String,
      unique: true,
    },

    emailbusiness: {
      required: true,
      unique: true,
      type: String,
      max: 50,
      lowercase: true,
      trim: true,
    },

    passwordbusiness: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserBusiness", UserBusinessSchema);

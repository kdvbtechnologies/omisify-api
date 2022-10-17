const mongoose = require("mongoose");

const PanelSchema = new mongoose.Schema(
  {
    sex: {
      type: String,
    },

    country: {
      type: String,
    },

    codewelcome: {
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
      max: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // comment
    // comment
    // comment

    // point
    pointtcommentsept2022: {
      type: String,
    },

    pointtcomment2022: {
      type: String,
    },

    pointtcommentlife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    gaintcommentsept2022: {
      type: String,
    },

    gaintcomment2022: {
      type: String,
    },

    gaintcommentlife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    numbertcommentsept2022: {
      type: String,
    },

    numbertcomment2022: {
      type: String,
    },

    numbertcommentlife: {
      type: String,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },

    commentrecent: {
      type: String,
    },

    // email
    pointtemailsept2022: {
      type: String,
    },

    pointtemail2022: {
      type: String,
    },

    pointtemaillife: {
      type: String,
    },

    gaintemailsept2022: {
      type: String,
    },

    gaintemail2022: {
      type: String,
    },

    gaintemaillife: {
      type: String,
    },

    numbertemailsept2022: {
      type: String,
    },

    numbertemail2022: {
      type: String,
    },

    numbertemaillife: {
      type: String,
    },

    emailrecent: {
      type: String,
    },

    // data likecomment
    pointtlikecommentsept2022: {
      type: String,
    },

    pointtlikecomment2022: {
      type: String,
    },

    pointtlikecommentlife: {
      type: String,
    },

    gaintlikecommentsept2022: {
      type: String,
    },

    gaintlikecomment2022: {
      type: String,
    },

    gaintlikecommentlife: {
      type: String,
    },

    numbertlikecommentsept2022: {
      type: String,
    },

    numbertlikecomment2022: {
      type: String,
    },

    numbertlikecommentlife: {
      type: String,
    },

    likecommentrecent: {
      type: String,
    },

    // data likepublication
    pointtlikepublicationsept2022: {
      type: String,
    },

    pointtlikepublication2022: {
      type: String,
    },

    pointtlikepublicationlife: {
      type: String,
    },

    gaintlikepublicationsept2022: {
      type: String,
    },

    gaintlikepublication2022: {
      type: String,
    },

    gaintlikepublicationlife: {
      type: String,
    },

    numbertlikepublicationsept2022: {
      type: String,
    },

    numbertlikepublication2022: {
      type: String,
    },

    numbertlikepublicationlife: {
      type: String,
    },

    likepublicationrecent: {
      type: String,
    },

    // data m10k
    pointtm10ksept2022: {
      type: String,
    },

    pointtm10k2022: {
      type: String,
    },

    pointtm10klife: {
      type: String,
    },

    gaintm10ksept2022: {
      type: String,
    },

    gaintm10k2022: {
      type: String,
    },

    gaintm10klife: {
      type: String,
    },

    numbertm10ksept2022: {
      type: String,
    },

    numbertm10k2022: {
      type: String,
    },

    numbertm10klife: {
      type: String,
    },

    m10krecent: {
      type: String,
    },

    // data message
    pointtmessagesept2022: {
      type: String,
    },

    pointtmessage2022: {
      type: String,
    },

    pointtmessagelife: {
      type: String,
    },

    gaintmessagesept2022: {
      type: String,
    },

    gaintmessage2022: {
      type: String,
    },

    gaintmessagelife: {
      type: String,
    },

    numbertmessagesept2022: {
      type: String,
    },

    numbertmessage2022: {
      type: String,
    },

    numbertmessagelife: {
      type: String,
    },

    messagerecent: {
      type: String,
    },

    // data mwi
    pointtmwisept2022: {
      type: String,
    },

    pointtmwi2022: {
      type: String,
    },

    pointtmwilife: {
      type: String,
    },

    gaintmwisept2022: {
      type: String,
    },

    gaintmwi2022: {
      type: String,
    },

    gaintmwilife: {
      type: String,
    },

    numbertmwisept2022: {
      type: String,
    },

    numbertmwi2022: {
      type: String,
    },

    numbertmwilife: {
      type: String,
    },

    mwirecent: {
      type: String,
    },

    // data publication
    pointtpublicationsept2022: {
      type: String,
    },

    pointtpublication2022: {
      type: String,
    },

    pointtpublicationlife: {
      type: String,
    },

    gaintpublicationsept2022: {
      type: String,
    },

    gaintpublication2022: {
      type: String,
    },

    gaintpublicationlife: {
      type: String,
    },

    numbertpublicationsept2022: {
      type: String,
    },

    numbertpublication2022: {
      type: String,
    },

    numbertpublicationlife: {
      type: String,
    },

    publicationrecent: {
      type: String,
    },

    // data pwi
    pointtpwisept2022: {
      type: String,
    },

    pointtpwi2022: {
      type: String,
    },

    pointtpwilife: {
      type: String,
    },

    gaintpwisept2022: {
      type: String,
    },

    gaintpwi2022: {
      type: String,
    },

    gaintpwilife: {
      type: String,
    },

    numbertpwisept2022: {
      type: String,
    },

    numbertpwi2022: {
      type: String,
    },

    numbertpwilife: {
      type: String,
    },

    pwirecent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PanelSeptember2022", PanelSchema);

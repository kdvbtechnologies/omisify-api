const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    // user infos
    // user infos
    // user infos
    // user infos
    // user infos
    name: {
      type: String,
      min: 3,
      max: 20,
      unique: true,
    },

    partnername: {
      type: String,
      unique: true,
    },

    shortname: {
      type: String,
    },
	
	gdb: {
		type: String,
	},
	
	accesscode: {
		type: String,
	},

    codewelcomementor: {
      type: String,
    },

    codewelcome: {
      type: String,
    },

    welcomebonus: {
      type: String,
    },

    codewelcomebonus: {
      type: String,
    },

    generositydays: {
      type: String,
    },

    generositydaysbonus: {
      type: String,
    },

    bestpartnerbonus: {
      type: String,
    },

    paymentmethod: {
      type: String,
    },

    birthcountry: {
      type: String,
    },

    dateofbirth: {
      type: String,
    },

    genre: {
      type: String,
    },

    country: {
      type: String,
    },

    age: {
      type: String,
    },

    groupwhatsapp: {
      type: String,
    },

    grouptelegram: {
      type: String,
    },

    numberwhatsapp: {
      type: String,
    },

    numbertelegram: {
      type: String,
    },

    dateJoin: {
      type: String,
    },

    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 6,
      trim: true,
    },

    date: {
      type: String,
    },

    time: {
      type: String,
    },

    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment
    // comment

    // point
    // point
    // point
    pointtcommentsept2022: {
      type: String,
    },

    pointtcommentoct2022: {
      type: String,
    },

    pointtcommentnov2022: {
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

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintcommentsept2022: {
      type: String,
    },

    gaintcommentoct2022: {
      type: String,
    },

    gaintcommentnov2022: {
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

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertcommentsept2022: {
      type: String,
    },

    numbertcommentoct2022: {
      type: String,
    },

    numbertcommentnov2022: {
      type: String,
    },

    numbertcomment2022: {
      type: String,
    },

    numbertcommentlife: {
      type: String,
    },

    commentrecent: {
      type: String,
    },
	
	numbercommententeradmin: {
		type: String
	},
	
	statuscomment: {
		type: String,
	},

    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email
    // email

    // point
    // point
    // point
    // point
    pointtemailsept2022: {
      type: String,
    },

    pointtemailoct2022: {
      type: String,
    },

    pointtemailnov2022: {
      type: String,
    },

    pointtemail2022: {
      type: String,
    },

    pointtemaillife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintemailsept2022: {
      type: String,
    },

    gaintemailoct2022: {
      type: String,
    },

    gaintemailnov2022: {
      type: String,
    },

    gaintemail2022: {
      type: String,
    },

    gaintemaillife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertemailsept2022: {
      type: String,
    },

    numbertemailoct2022: {
      type: String,
    },

    numbertemailnov2022: {
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

    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k
    // e10k

    // point
    // point
    // point
    // point
    pointte10ksept2022: {
      type: String,
    },

    pointte10koct2022: {
      type: String,
    },

    pointte10knov2022: {
      type: String,
    },

    pointte10k2022: {
      type: String,
    },

    pointte10klife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gainte10ksept2022: {
      type: String,
    },

    gainte10koct2022: {
      type: String,
    },

    gainte10knov2022: {
      type: String,
    },

    gainte10k2022: {
      type: String,
    },

    gainte10klife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numberte10ksept2022: {
      type: String,
    },

    numberte10koct2022: {
      type: String,
    },

    numberte10knov2022: {
      type: String,
    },

    numberte10k2022: {
      type: String,
    },

    numberte10klife: {
      type: String,
    },

    e10krecent: {
      type: String,
    },

    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment
    // likescomment

    // point
    // point
    // point
    // point
    pointtlikescommentsept2022: {
      type: String,
    },

    pointtlikescommentoct2022: {
      type: String,
    },

    pointtlikescommentnov2022: {
      type: String,
    },

    pointtlikescomment2022: {
      type: String,
    },

    pointtlikescommentlife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintlikescommentsept2022: {
      type: String,
    },

    gaintlikescommentoct2022: {
      type: String,
    },

    gaintlikescommentnov2022: {
      type: String,
    },

    gaintlikescomment2022: {
      type: String,
    },

    gaintlikescommentlife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertlikescommentsept2022: {
      type: String,
    },

    numbertlikescommentoct2022: {
      type: String,
    },

    numbertlikescommentnov2022: {
      type: String,
    },

    numbertlikescomment2022: {
      type: String,
    },

    numbertlikescommentlife: {
      type: String,
    },

    likescommentrecent: {
      type: String,
    },

    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication
    // likespublication

    // point
    // point
    // point
    // point
    pointtlikespublicationsept2022: {
      type: String,
    },

    pointtlikespublicationoct2022: {
      type: String,
    },

    pointtlikespublicationnov2022: {
      type: String,
    },

    pointtlikespublication2022: {
      type: String,
    },

    pointtlikespublicationlife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintlikespublicationsept2022: {
      type: String,
    },

    gaintlikespublicationoct2022: {
      type: String,
    },

    gaintlikespublicationnov2022: {
      type: String,
    },

    gaintlikespublication2022: {
      type: String,
    },

    gaintlikespublicationlife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertlikespublicationsept2022: {
      type: String,
    },

    numbertlikespublicationoct2022: {
      type: String,
    },

    numbertlikespublicationnov2022: {
      type: String,
    },

    numbertlikespublication2022: {
      type: String,
    },

    numbertlikespublicationlife: {
      type: String,
    },

    likespublicationrecent: {
      type: String,
    },

    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k
    // m10k

    // point
    // point
    // point
    // point
    pointtm10ksept2022: {
      type: String,
    },

    pointtm10koct2022: {
      type: String,
    },

    pointtm10knov2022: {
      type: String,
    },

    pointtm10k2022: {
      type: String,
    },

    pointtm10klife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintm10ksept2022: {
      type: String,
    },

    gaintm10koct2022: {
      type: String,
    },

    gaintm10knov2022: {
      type: String,
    },

    gaintm10k2022: {
      type: String,
    },

    gaintm10klife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertm10ksept2022: {
      type: String,
    },

    numbertm10koct2022: {
      type: String,
    },

    numbertm10knov2022: {
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
	
	numberm10kenteradmin: {
		type: String
	},
	
	statusm10k: {
		type: String,
	}

    // message
    // message
    // message
    // message
    // message
    // message
    // message
    // message
    // message
    // message
    // message
    // message

    // point
    // point
    // point
    // point
    pointtmessagesept2022: {
      type: String,
    },

    pointtmessageoct2022: {
      type: String,
    },

    pointtmessagenov2022: {
      type: String,
    },

    pointtmessage2022: {
      type: String,
    },

    pointtmessagelife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintmessagesept2022: {
      type: String,
    },

    gaintmessageoct2022: {
      type: String,
    },

    gaintmessagenov2022: {
      type: String,
    },

    gaintmessage2022: {
      type: String,
    },

    gaintmessagelife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertmessagesept2022: {
      type: String,
    },

    numbertmessageoct2022: {
      type: String,
    },

    numbertmessagenov2022: {
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

    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi
    // mwi

    // point
    // point
    // point
    // point
    pointtmwisept2022: {
      type: String,
    },

    pointtmwioct2022: {
      type: String,
    },

    pointtmwinov2022: {
      type: String,
    },

    pointtmwi2022: {
      type: String,
    },

    pointtmwilife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintmwisept2022: {
      type: String,
    },

    gaintmwioct2022: {
      type: String,
    },

    gaintmwinov2022: {
      type: String,
    },

    gaintmwi2022: {
      type: String,
    },

    gaintmwilife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertmwisept2022: {
      type: String,
    },

    numbertmwioct2022: {
      type: String,
    },

    numbertmwinov2022: {
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

    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication
    // publication

    // point
    // point
    // point
    // point
    pointtpublicationsept2022: {
      type: String,
    },

    pointtpublicationoct2022: {
      type: String,
    },

    pointtpublicationnov2022: {
      type: String,
    },

    pointtpublication2022: {
      type: String,
    },

    pointtpublicationlife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintpublicationsept2022: {
      type: String,
    },

    gaintpublicationoct2022: {
      type: String,
    },

    gaintpublicationnov2022: {
      type: String,
    },

    gaintpublication2022: {
      type: String,
    },

    gaintpublicationlife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertpublicationsept2022: {
      type: String,
    },

    numbertpublicationoct2022: {
      type: String,
    },

    numbertpublicationnov2022: {
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

    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi
    // pwi

    // point
    // point
    // point
    // point
    pointtpwisept2022: {
      type: String,
    },

    pointtpwioct2022: {
      type: String,
    },

    pointtpwinov2022: {
      type: String,
    },

    pointtpwi2022: {
      type: String,
    },

    pointtpwilife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintpwisept2022: {
      type: String,
    },

    gaintpwioct2022: {
      type: String,
    },

    gaintpwinov2022: {
      type: String,
    },

    gaintpwi2022: {
      type: String,
    },

    gaintpwilife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertpwisept2022: {
      type: String,
    },

    numbertpwioct2022: {
      type: String,
    },

    numbertpwinov2022: {
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

    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp
    // pwp

    // point
    // point
    // point
    // point
    pointtpwpsept2022: {
      type: String,
    },

    pointtpwpoct2022: {
      type: String,
    },

    pointtpwpnov2022: {
      type: String,
    },

    pointtpwp2022: {
      type: String,
    },

    pointtpwplife: {
      type: String,
    },

    pointtlifesept2022: {
      type: String,
    },

    pointtlifeoct2022: {
      type: String,
    },

    pointtlifenov2022: {
      type: String,
    },

    pointtlife2022: {
      type: String,
    },

    pointtlife: {
      type: String,
    },

    // gain
    // gain
    // gain
    gaintpwpsept2022: {
      type: String,
    },

    gaintpwpoct2022: {
      type: String,
    },

    gaintpwpnov2022: {
      type: String,
    },

    gaintpwp2022: {
      type: String,
    },

    gaintpwplife: {
      type: String,
    },

    gaintlifesept2022: {
      type: String,
    },

    gaintlifeoct2022: {
      type: String,
    },

    gaintlifenov2022: {
      type: String,
    },

    gaintlife2022: {
      type: String,
    },

    gaintlife: {
      type: String,
    },

    // number
    // number
    // number
    numbertpwpsept2022: {
      type: String,
    },

    numbertpwpoct2022: {
      type: String,
    },

    numbertpwpnov2022: {
      type: String,
    },

    numbertpwp2022: {
      type: String,
    },

    numbertpwplife: {
      type: String,
    },

    pwprecent: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

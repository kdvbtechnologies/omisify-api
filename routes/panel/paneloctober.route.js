const express = require("express");
const paneloctober = express.Router();

// comment
const {
  addComment,
  getAllComment,
} = require("../../controllers/panel/october/panelcommentoctober.controller");

// e10k
const {
  adde10k,
  getAlle10k,
} = require("../../controllers/panel/october/panele10koctober.controller");

// email
const {
  addemail,
  getAllemail,
} = require("../../controllers/panel/october/panelemailoctober.controller");

// likescomment
const {
  addlikescomment,
  getAlllikescomment,
} = require("../../controllers/panel/october/panellikescommentoctober.controller");

// likespublication
const {
  addlikespublication,
  getAlllikespublication,
} = require("../../controllers/panel/october/panellikespublicationoctober.controller");

// m10k
const {
  addm10k,
  getAllm10k,
} = require("../../controllers/panel/october/panelm10koctober.controller");

// message
const {
  addmessage,
  getAllmessage,
} = require("../../controllers/panel/october/panelmessageoctober.controller");

// mwi
const {
  addmwi,
  getAllmwi,
} = require("../../controllers/panel/october/panelmwioctober.controller");

// publication
const {
  addpublication,
  getAllpublication,
} = require("../../controllers/panel/october/panelpublicationoctober.controller");

// pwi
const {
  addpwi,
  getAllpwi,
} = require("../../controllers/panel/october/panelpwioctober.controller");

// pwp
const {
  addpwp,
  getAllpwp,
} = require("../../controllers/panel/october/panelpwpoctober.controller");

paneloctober.post("/comment/add", addComment);
paneloctober.get("/comment/", getAllComment);

paneloctober.post("/e10k/add", adde10k);
paneloctober.get("/e10k/", getAlle10k);

paneloctober.post("/email/add", addemail);
paneloctober.get("/email/", getAllemail);

paneloctober.post("/likescomment/add", addlikescomment);
paneloctober.get("/likescomment/", getAlllikescomment);

paneloctober.post("/likespublication/add", addlikespublication);
paneloctober.get("/likespublication/", getAlllikespublication);

paneloctober.post("/m10k/add", addm10k);
paneloctober.get("/m10k/", getAllm10k);

paneloctober.post("/message/add", addmessage);
paneloctober.get("/message/", getAllmessage);

paneloctober.post("/mwi/add", addmwi);
paneloctober.get("/mwi/", getAllmwi);

paneloctober.post("/publication/add", addpublication);
paneloctober.get("/publication/", getAllpublication);

paneloctober.post("/pwi/add", addpwi);
paneloctober.get("/pwi/", getAllpwi);

paneloctober.post("/pwp/add", addpwp);
paneloctober.get("/pwp/", getAllpwp);

module.exports = paneloctober;

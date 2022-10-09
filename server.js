const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "https://omisify.com",
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

app.get("/", function (req, res) {
  res.send("Omisify api success");
});

app.listen(2000, console.log("server 2000 is running"));

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Omisify api success");
});

app.listen(2000, console.log("server 2000 is running"));

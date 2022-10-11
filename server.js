require("dotenv").config({ path: "./config/.env" });
require("./config/db");

const express = require("express");
const app = express();
const userRoute = require("./routes/user.route");
const pointRoute = require("./routes/point.route");
const monthRoute = require("./routes/month.route");

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoute);
app.use("/api/point", pointRoute);
app.use("/api/month", monthRoute);

app.listen(4000, console.log("server 4000 is running"));

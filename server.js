const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();

  app.get("/", (req, res) => {
    console.log("connected to server");
  });

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

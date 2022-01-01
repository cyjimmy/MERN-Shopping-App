const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { Product, User } = require("./model");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();

  app.get("/products", async (req, res) => {
  });

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const path = require("path");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.DATABASE_URL;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();
  const cart = [];

  app.use(express.json());

  app.use("/products", productRoutes);

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

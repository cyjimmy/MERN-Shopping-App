const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();
  const cart = [];

  app.use(express.json())

  app.use("/products", productRoutes);

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

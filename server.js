const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const path = require("path");

dotenv.config();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

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

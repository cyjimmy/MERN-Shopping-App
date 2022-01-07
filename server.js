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

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  } else {
    app.get("/", (req, res) => {
      res.send("Api running");
    });
  }

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

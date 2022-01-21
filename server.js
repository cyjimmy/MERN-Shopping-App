const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const path = require("path");
const { User } = require("./model");
const bcrypt = require("bcrypt");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.DATABASE_URL;
const app = express();
const saltRounds = 10;

mongoose.connect(MONGO_URI).then(() => {
  app.use(express.json());

  app.use("/products", productRoutes);

  app.post("/login", async (req, res) => {
    const target = await User.findOne({
      email: req.body.email,
    });
    if (!target) {
      res.json("fail");
      return;
    }
    bcrypt.compare(req.body.password, target.password, function (err, result) {
      if (result) {
        res.json("success");
      } else {
        res.json("fail");
      }
    });
  });

  app.post("/signUp", (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      User.create({ email: req.body.email, password: hash });
    });
  });

  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
  }

  app.listen(PORT, () => {
    console.log(`Now listening to ${PORT}`);
  });
});

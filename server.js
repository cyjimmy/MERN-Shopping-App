const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const path = require("path");
const { User } = require("./model");

dotenv.config();

const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.DATABASE_URL;

mongoose.connect(MONGO_URI).then(() => {
  const app = express();

  app.use(express.json());

  app.use("/products", productRoutes);

  app.post("/login", async (req, res) => {
    console.log(req.body);
    const target = await User.find({
      email: req.body.email,
      password: req.body.password,
    });
    res.json(target);
  });

  app.post("/signUp", (req, res) => {
    console.log(req.body);
    User.create({ email: req.body.email, password: req.body.password });
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

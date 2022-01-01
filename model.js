const mongoose = require("mongoose");

const productSchema = {
  name: { type: String, trim: true, required: true },
  price: { type: Number, required: true },
  category: { type: String, trim: true, required: true },
  imgUrl: { type: String, trim: true, required: true },
};

const userSchema = {
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true, unique: true },
  password: { type: String, required: true },
};

module.exports = {
  Product: mongoose.model("product", productSchema),
  User: mongoose.model("user", userSchema),
};

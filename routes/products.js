const express = require("express");
const mongoose = require("mongoose");
const { Product, User } = require("../model");

const router = express.Router();

router.get("/", async (req, res) => {
  const allProducts = await Product.find();
  res.json(allProducts);
});

router.get("/category/:category", async (req, res) => {
  const category = req.params.category;
  const productsInCategory = await Product.find({ category: category });
  res.json(productsInCategory)
});

router.get("/id/:id", (req, res) => {
  console.log("retrieve product by id");
});

module.exports = router;

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
  const queryProducts = await Product.find({ category: category });
  res.json(queryProducts)
});

router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const queryProduct = await Product.find({ _id: id });
  res.json(queryProduct)
});

module.exports = router;

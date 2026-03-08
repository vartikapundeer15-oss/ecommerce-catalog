const express = require("express");
const router = express.Router();

const Product = require("../models/product");


// Add Product
router.post("/add", async (req, res) => {
  try {

    const product = new Product(req.body);

    await product.save();

    res.json(product);

  } catch (error) {
    res.status(500).json(error);
  }
});


// Get All Products
router.get("/", async (req, res) => {

  const products = await Product.find();

  res.json(products);

});


// Add Review
router.post("/:id/review", async (req, res) => {

  const product = await Product.findById(req.params.id);

  product.reviews.push(req.body);

  const total = product.reviews.reduce(
    (sum, r) => sum + r.rating,
    0
  );

  product.avgRating = total / product.reviews.length;

  await product.save();

  res.json(product);

});


module.exports = router;
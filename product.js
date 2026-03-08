const mongoose = require("mongoose");

// Variant Schema
const variantSchema = new mongoose.Schema({
  sku: String,
  color: String,
  price: Number,
  stock: Number
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  rating: Number,
  comment: String
});

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  category: String,

  variants: [variantSchema],   // nested schema

  reviews: [reviewSchema],     // nested schema

  avgRating: {
    type: Number,
    default: 0
  }
});

// Export Model
module.exports = mongoose.model("Product", productSchema);
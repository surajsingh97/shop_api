const mongoose = require("mongoose");

const itemsSchema = mongoose.Schema({
  productName: String,
  Description: String,
  Price: Number,
  Quantity: Number,
  File: String,
  Gender: String,
  Size: String,
  Suplier: String,
  Category: String,
  subCategory: String,
});

module.exports = mongoose.model("items", itemsSchema);

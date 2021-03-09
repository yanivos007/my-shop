const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please include the product name"],
  },
  price: {
    type: Number,
    required: [true, "Please include the product price"],
  },
  imageUrl: {
    type: String,
    required: true,
  },
  category: {
        type: String,
        required: [true, "Please include the product category name"],
    },
  
  description: {
    type: String,
    required: [true, "Please include the product description"],
  },
});

const IProduct = mongoose.model("products", productSchema);

module.exports = IProduct;

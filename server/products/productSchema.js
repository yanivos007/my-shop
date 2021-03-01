const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
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
  category: [
    {
      name: {
        type: String,
        required: [true, "Please include the product category name"],
      },
      id: {
        type: Number,
        required: [true, "Please include the product category id"],
      },
    },
  ],
  description: {
    type: String,
    required: [true, "Please include the product description"],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

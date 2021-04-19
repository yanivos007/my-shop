const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { productSchema } = require("../products/productSchema");

let cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },

  products: [
    {
      product: {
        type: productSchema,
      },
      quantity: {
        type: Number,
        min: [1, "Quantity can not be less then 1."],
      },
    },
  ],
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

const ICart = mongoose.model("cart", cartSchema);

module.exports = ICart;

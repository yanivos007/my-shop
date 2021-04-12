const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cartSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },

  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products",
      },
      quantity: {
        type: Number,
        min: [1, "Quantity can not be less then 1."],
      },
      price: Number,
      totalPrice: Number,
    },
  ],
  modifiedOn: {
    type: Date,
    default: Date.now,
  },
});

const ICart = mongoose.model("cart", cartSchema);

module.exports = ICart;

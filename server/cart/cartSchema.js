const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cartSchema = new Schema({

  _id: {
    type: Number,
    require: true,
  },
  userId: {
    type: Number,
    ref: "User",
    required: true,
  },
  date: {
    type: String,
    default: new Date(),
  },
  cartProducts: {
    items: [
      {
        productId: {
          type: Number,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity can not be less then 1."],
        },
        price: {
          type: Number,
          required: true,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

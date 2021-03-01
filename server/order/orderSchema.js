const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  products: [
    {
      // type: Object - you can specify full product of the document. (any object)
      product: { type: Object, required: true },
      quantity: { type: Number, required: true }
    }
  ],
  user: {
    name: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  }
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

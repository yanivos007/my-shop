const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  cartId:{
    type: Number,
    require: true
  },
  finalPrice:{
    type:Number, 
    require: true
  },
  userId: {
    type: Number,
    required: true,
  },
  orderDetails: [
     {
       city: {type: String, require :true},
       adress: {type: String, require :true},
       date: {type: Date, require :true},
       dateToDeliver: {type: Date, require :true},
       creditCard: {type: Number, require :true},
       phoneNumber: {type: Number, require :true},
     }
  ]
});

const IOrder = mongoose.model("Order", orderSchema);

module.exports = IOrder;

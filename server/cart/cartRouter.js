const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const cartSchema = require("./cartSchema");

router.post("/post", (req, res) => {
  const {
    _id,
    userId,
    date,
    cartProductId,
    quantity,
    price,
    totalPrice,
  } = req.body;
  let cartSchema = {};
  cartSchema._id = id;
  cartSchema.userId = userId;
  cartSchema.date = date;
  cartSchema.cartProducts.item._id = cartProductId;
  cartSchema.cartProducts.item.quantity = quantity;
  cartSchema.cartProducts.item.price = price;
  cartSchema.cartProducts.item.totalPrice = totalPrice;
  res.json(cartSchema);
});
router.get("/getAll", async (req, res) => {
  const fetchCart = await cartSchema.find();
  res.status(200).send(fetchCart);
});
router.post("/getById", async (req, res) => {});

module.exports = router;

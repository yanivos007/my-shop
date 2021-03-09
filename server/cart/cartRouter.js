const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ICart = require("./cartSchema");

router.post("/post", async (req, res) => {
  const cart = new ICart({
   
    userId: req.body.userId,
    date: req.body.date,
    cartProductId: req.body.cartProduct.item.productId,
    Quantity: req.body.cartProduct.item.quantity,
    Price: req.body.cartProduct.item.price,
    TotalPrice: req.body.cartProduct.item.TotalPrice,
  });
  const myCart = await cart.save();
  res.json(myCart);
});
router.get("/", async (req, res) => {
  try {
    const fetchCart = await cartSchema.find();
    res.status(200).send(fetchCart);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/getById", async (req, res) => {});

module.exports = router;

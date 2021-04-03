const express = require("express");
const router = express.Router();
const ICart = require("./cartSchema");
const cartRepository = require("./cartRepository");

router.post("/post", async (req, res) => {
  const { productId, quantity, price, TotalPrice } = req.body;
  // cart = new ICart({
  //   userId: req.body.userId,
  //   date: req.body.date,
  //   cartProductId: req.body.products.productId,
  //   Quantity: req.body.products.quantity,
  //   Price: req.body.products.price,
  //   TotalPrice: req.body.products.TotalPrice,
  // });
  try {
    const myCart = await cartRepository.getCart({ userId });
    if (myCart) {
      let itemIndex = Icart.products.findIndex((p) => p.productId == productId);
      if (itemIndex > -1) {
        //product exists in the cart, update the quantity
        let productItem = cart.products[itemIndex];
        productItem.quantity = quantity;
        cart.products[itemIndex] = productItem;
      } else {
        //product does not exists in cart, add new item
        cart.products.push({ productId, quantity, price, TotalPrice });
      }
      cart = await cart.save();
      return res.status(201).send(cart);
      res.json(cart);
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cart = await cartRepository.getCart();
    console.log(cart);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/getById", async (req, res) => {});

module.exports = router;

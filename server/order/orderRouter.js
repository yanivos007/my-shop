const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Order = require("./orderSchema");
const orderRepository = require("./orderRepository");

router.post("/post", async (req, res) => {
  const {} = req.body;
  let Order = {};
  Order.products.product = product;
  Order.products.quanity = quanity;
  Order.user.userName = userName;
  Order.user.userId = userId;

  res.json();
});
router.get("/orders", async (req, res) => {
  try {
    const fetchAllOrders = await Order.find();
    res.status(200).json(fetchAllOrders);
  } catch (err) {
    res.status(400).json({ err: "not getting into get at orderRouter" });
  }
});
router.get("/order/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const fetchOrderById = await Order.find(id);
    res.status(200).json(fetchOrderById);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get order by id at orderRouter" });
  }
});

module.exports = router;

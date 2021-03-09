const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const IOrder = require("./orderSchema");
const orderRepository = require("./orderRepository");

router.post("/post", async (req, res) => {
  try {
    const order = new IOrder({
      finalPrice: req.body.finalPrice,
      userId: req.body.userId,
      orderDetails: {
        city : req.body.userName,
        adress : req.body.adress,
        date : req.body.date,
        dateToDeliver : req.body.dateToDeliver,
        creditCard : req.body.creditCard,
        phoneNumber : req.body.phoneNumber,
      
      }
    });
    const myOrder = await order.save();
    res.json(myOrder);
  } catch (err) {
    console.log(err);
  }
});
router.get("/", async (req, res) => {
  try {
    console.log("im in order");

    const orders = await orderRepository.getOrder();
    res.status(200).json(orders);
  } catch (err) {
    res.status(400).json({ err: "not getting into get at orderRouter" });
  }
});
router.get("/order/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const orderId = await Order.find(id);
    res.status(200).json(orderId);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get order by id at orderRouter" });
  }
});

module.exports = router;

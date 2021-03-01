const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Order = require ('./orderSchema')

router.post('/post', (req, res)=> {
    const { } = req.body;
    let Order ={};
    Order.products.product = product ;
    Order.products.quanity = quanity ;
    Order.user.userName = userName;
    Order.user.userId = userId;
   
res.json(usersSchema)
})
router.get('/', (req, res)=> {
    try{

        const fetchAllUsers = await Order.find();
        res.status(200).json(fetchAllOrders);
    }catch(err){
        res.status(400).json({ err: "not getting into get at orderRouter" })

    }

})
router.post('/get/:id', (req, res)=> {
    try{
        const fetchOrderById = await Order.find({Orders: req.params.orderSchema});
        res.status(200).json( fetchOrderById );
    }catch{
        res.status(400).json({ err: "not getting into get order by id at orderRouter" })
    }

})

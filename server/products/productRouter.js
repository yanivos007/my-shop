const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.post('/post', (req, res)=> {
    const {id, name, price, picture, description} = req.body;
    let products ={};
    productSchema.id = id;
    productSchema.name = name;
    productSchema.price = price;
    productSchema.picture = picture;
    productSchema.description = description;
res.json(productSchema)
})
router.get('/getAll', (req, res)=> {

})
router.post('/getById', (req, res)=> {

})

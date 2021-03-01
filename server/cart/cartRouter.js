const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productSchema = require ('./productSchema')

router.post('/post', (req, res)=> {
    const {id, name, price, picture, description} = req.body;
    let productSchema ={};
    productSchema.id = id;
    productSchema.name = name;
    productSchema.price = price;
    productSchema.picture = picture;
    productSchema.description = description;
res.json(productSchema)
})
router.get('/getAll', async (req, res)=> {
const fetchCart = await productSchema.find()
})
router.post('/getById', (req, res)=> {

})

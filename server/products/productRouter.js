const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productRepository = require('./productRepository')

exports.createProduct = async (req, res) => {
    try{
        let payload = {
            name: req.body.name,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            categoryName: req.body.category.name,
            categoryId: req.body.category.name,
            description: req.body.description
        }
        let product = await productRepository.createProduct({...payload});
    res.status(200).json({
        status: true,
        data: product,
    })
}catch (err){
    console.log(err)
    res.status(500).json({
        error: err,
        status: false,
    })
};

exports.getProductById = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.productById(id);
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
};

exports.removeProduct = async (req, res) => {
    try {
        let id = req.params.id
        let productDetails = await productRepository.removeProduct(id)
        res.status(200).json({
            status: true,
            data: productDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}


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
router.get('/get', (req, res)=> {

})
router.post('/getById', (req, res)=> {

})

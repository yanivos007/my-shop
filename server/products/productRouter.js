// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();
// const productRepository = require('./productRepository')

const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const productRepository = require("./productRepository");
const Product = require("./productSchema");



router.post("/post", (req, res) => {
  const { id, name, price, picture, description, categoryId, categoyName } = req.body;
  let productSchema = {};
  productSchema.id = id;
  productSchema.name = name;
  productSchema.price = price;
  productSchema.picture = picture;
  productSchema.description = description;
  productSchema.category.id = categoryId;
  productSchema.category.name = categoyName;
  res.json(productSchema);
});

router.get("/", async (req, res) => {
  console.log("im in");
  const products = await productRepository.getProducts();
  res.json(products);
});

router.get("/getById", async (req, res) => {
  try {
    const product = await productRepository.productById(
      { Products: req.params.accountNumber });
      console.log(req.params + "req Params")
    res.status(200).json(product);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});


module.exports = router;

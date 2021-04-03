const express = require("express");
const router = express.Router();
const productRepository = require("./productRepository");
const IProduct = require("./productSchema");

router.post("/add", async (req, res) => {
  try {
    const product = new IProduct({
      name: req.body.name,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      categoryName: req.body.categoryName,
      description: req.body.description,
    });
    const myProduct = await product.save();
    res.json(myProduct);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log("im in products");
    const products = await productRepository.getProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:productId", async (req, res) => {
  try {
    const product = await productRepository.productById({
      _id: req.params.productId,
    });
    res.status(200).json(product);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    const deleteProduct = await productRepository.removeProduct({
      _id: req.params.productId,
    });
    res.status(200).json(deleteProduct);
  } catch {
    res
      .status(400)
      .json({ err: "not getting into get user by id at usersRouter" });
  }
});

module.exports = router;

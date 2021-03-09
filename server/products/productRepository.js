const IProduct = require("./productSchema");

exports.getProducts = async () => {
  //findAll
  const products = await IProduct.find();
  return products;
};
exports.productById = async (id) => {
  //find by id
  const product = await IProduct.findById(id);
  return product;
};
exports.createProduct = async (product) => {
  //new product
  const newProduct = await IProduct.create(product);
  return newProduct;
};
exports.removeProduct = async (id) => {
  //delete product
  const product = await IProduct.findByIdAndRemove(id);
  return product;
};

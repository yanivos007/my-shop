const Product = require("./productSchema");
exports.getProducts = async () => {
  //findAll
  const products = await Product.find();
  return products;
};
exports.productById = async (id) => {
  //find by id
  const product = await Product.findById(id);
  return product;
};
exports.createProduct = async (payload) => {
  //new product
  const newProduct = await Product.create(payload);
  return products;
};
exports.removeProduct = async (id) => {
  //delete product
  const product = await Product.findByIdAndRemove(payload);
  return product;
};


const Cart = require("./cartSchema");
exports.getCarts = async () => {
  //findAll
  const carts = await Cart.find();
  return carts;
};
exports.cartById = async (id) => {
  //find by id
  const product = await Cart.findById(id);
  return product;
};
exports.createCart = async (payload) => {
  //new product
  const newCart = await Cart.create(payload);
  return newCart;
};
exports.removeCart = async (id) => {
  //delete product
  const carts = await Cart.findByIdAndRemove(id);
  return carts;
};

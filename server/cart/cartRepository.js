const ICart = require("./cartSchema");

exports.getCart = async (userId) => {
  //findAll
  const carts = await ICart.find(userId);
  return carts;
};
exports.cartById = async (id) => {
  //find by id
  const cart = await ICart.findById(id);
  return cart;
};
exports.createCart = async (payload) => {
  //new product
  const newCart = await ICart.create(payload);
  return newCart;
};
exports.removeCart = async (id) => {
  //delete product
  const carts = await ICart.findByIdAndRemove(id);
  return carts;
};

const Order = require("./orderSchema");

exports.getOrder = async () => {
  //findAll
  const orders = await Order.find();
  return orders;
};
exports.orderById = async (id) => {
  //find by id
  const order = await Order.findById(id);
  return order;
};
exports.createOrder = async (order) => {
  //new product
  const newOrder = await Order.create(order);
  return newOrder;
};
exports.removeOrder = async (id) => {
  //delete product
  const order = await Order.findByIdAndRemove(id);
  return order;
};

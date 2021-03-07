const Users = require("./usersSchema");
const bcrypt = require('bcrypt');

exports.getUsers = async () => {
  //findAll
  const users = await Users.find();
  return users;
};
exports.usersById = async (id) => {
  //find by id
  const user = await Users.findById(id);
  return user;
};
exports.createUser = async (payload) => {
  //new product
  const newUser = await Users.create(payload);
  return users;
};
exports.removeUser = async (id) => {
  //delete product
  const user = await Users.findByIdAndRemove(id);
  return user;
};


const Users = require("./usersSchema");
const bcrypt = require("bcrypt");

exports.getUsers = async () => {
  //findAll
  const users = await Users.find();
  return users;
};
exports.usersById = async (email) => {
  //find by id
  const user = await Users.findById(email);
  return user;
};
exports.hashPassword = async (email)=> {
  const hashPassword = await Users.findOne({email}).exec();
  return hashPassword.password;
}
exports.usersByEmail = async (email) => {
  //find by id
  const user = await Users.findOne({ email }).exec();
  return user;
};
exports.createUser = async (payload) => {
  //new product
  const newUser = await Users.create(payload);
  return newUser;
};
exports.removeUser = async (id) => {
  //delete product
  const user = await Users.findByIdAndRemove(id);
  return user;
};

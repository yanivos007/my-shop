const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
  email: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

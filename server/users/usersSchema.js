const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const usersSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
  },
  verifyPassword: {
    type: String,
    required: true,
  },
  firstName: {
    type: Number,
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
    enum: ['user', 'admin'],
    require: true,
    default: 'user'
  },
  // cart: {
  //   items: [
  //     {
  //       productId: {
  //         type: Schema.Types.ObjectId,
  //         // referred to Product Model
  //         ref: "Product",
  //         required: true
  //       },
  //       quantity: { type: Number, required: true }
  //     }
  //   ]
  // }
});

const Users = mongoose.model("Users", usersSchema);

module.exports = Users;

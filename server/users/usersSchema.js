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
  // sessions: [
  //   {
  //     token: {
  //       require: true,
  //       type: String,
  //     },
  //     expireDate: {
  //       type: Number,
  //       require: true,
  //     },
  //   },
  // ],
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

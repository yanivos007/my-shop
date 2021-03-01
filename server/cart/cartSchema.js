const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cartSchema = new Schema({
    // productId: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Product",
    // },
    _id: {
        type: Number, 
        require: true
    },
    userId: {
        type: Number, 
        require: true
    },
    date:{
        type: String,
        default: new Date()
    },
    
    quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.']
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true
})


const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
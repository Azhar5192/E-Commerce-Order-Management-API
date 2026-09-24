const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type: Number,
        required:true,
        min:1
    },
    price:{
        type:Number,
        required:true
    }
});

const orderSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    item:[orderItemSchema],
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        emun:[
            "pending",
            "confirmed",
            "shipped",
            "delivered",
            "cancelled"
        ],
        default:"pending"
    },
    shippingAddress:{
        type:String,
        required:true
    }
})
const Order = mongoose.model("Oder",orderSchema);
module.exports = Order;
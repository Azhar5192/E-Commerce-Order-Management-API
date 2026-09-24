const mongoose = require("mongoose");

const prodSchema = new mongoose.Schema({
    prodname:{
        type:String,
        required:true
    },
    prodprice:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    stockQuantity:{
        type:Number
    },
    category:{
        type:String
    },
    prodStatus:{
        type:String,
        enum:["active","inactive","out_of_stock"],
        default: "active"
    }
    
})

const Product = mongoose.model("Product",prodSchema);
module.exports = Product
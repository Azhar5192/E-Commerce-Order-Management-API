const product = require("../models/product")

const creatproduct = async (req,res) => {
    try {
        // get the product body from req.body
        const {
            prodname,
            prodprice,
            description,
            stockQuantity,
            category,
            prodStatus
        } = req.body;

        if(!prodname || 
           !prodprice || 
           !stockQuantity ||
           !category ||
           !prodStatus
        ){
            return res.status(400).json({
                error:"all field required"
            });
        }



    } catch(error){
        return res.status(500).json({
            error:"Internal Server Error"
        });
    }
};
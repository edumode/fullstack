const uploadProductPermission = require("../../helpers/permissions")
const productModel = require("../../models/productModel")

async function updateProductController(req,res){
    try{

    if(!uploadProductPermission(req.userId)){
        throw new Error("Permission denied")
    }    
        
    const { _id, ...resBody } = req.body

    const updateProduct = await productModel.findByIdAndUpdate(_id,resBody)

    res.status(201).json({
        message : "Product updated successfully",
        error : false,
        success : true,
        data : updateProduct
    })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateProductController
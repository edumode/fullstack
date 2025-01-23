const productModel = require("../../models/productModel")

const filterProductController = async(req, res) => {
    try{

        const categoryList = req?.body?.categoryList

        const product = await productModel.find({
            category : {
                "$in" : categoryList
            }
        })

        res.json({
            data : product,
            message : "Product Category",
            success : true,
            error : false
        })

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = filterProductController
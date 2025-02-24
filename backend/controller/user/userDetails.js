const userModel = require("../../models/userModel")

async function userDetailsController(req,res) {
    try{
        console.log("user ", req.userId)
        const user = await userModel.findById(req.userId)

        res.status(200).json({
            data : user,
            error: false,
            success : true,
            message : "User details"
        })

        console.log(user)
    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController

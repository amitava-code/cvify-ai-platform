const jwt=require("jsonwebtoken")
const blacklistTokenModel = require("../models/blacklist.model")

async function authUser(req,res,next){
    const token=req.cookies.token

    if(!token){
        return res.status(401).json({
            messgae:"token is missing"
        })
    }

    const isTokenBlacklisted= await blacklistTokenModel.findOne({
        token
    })

    if(isTokenBlacklisted){
        return res.status(401).json({
            messgae:"Token is BlackListed . Please login again"
        })
    }


    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET)

        req.user=decoded  //here we get the id

        next()   //next-> controller (getMeController)


    }catch(err){
        return res.status(401).json({
            messgae:"INVALID TOKEN"
        })
    }


}


module.exports={authUser}
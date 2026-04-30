const mongoose= require("mongoose")
const { applyTimestamps } = require("./user.model")

const blacklistTokenSchema= new mongoose.Schema({
    token:{
        type:String,
        required:[true,"Token is required to be added in blacklist"]
    },
   
},{
    timestamps:true
})

const blacklistTokenModel= mongoose.model("blacklistTokens",blacklistTokenSchema)

module.exports=blacklistTokenModel
const mongoose= require("mongoose")

async function connectToDB(){

    try{
         await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected To DB")

    }
    catch(err){

        console.log(err)

    }
}


module.exports=connectToDB
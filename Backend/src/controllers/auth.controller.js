const userModel= require("../models/user.model")
const bcrypt= require("bcryptjs")
const jwt =require("jsonwebtoken")
const blacklistTokenModel=require("../models/blacklist.model")

async function registerUserController(req,res){

    const{username,email,password}=req.body

    if(!username || !email || !password){
        return res.status(400).json({
            message:"username, password, email are REQUIRED"
        })
    }
    const isUserAlreadyExists= await userModel.findOne({
        $or:[{username},{email}]
    })

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"Account already exists with this email and password"
        })
    }

    const hash = await bcrypt.hash(password,10)

    const user= await userModel.create({
        username,
        email,
        password:hash
    })

    const token = jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn:"7d"}

    )

    res.cookie("token", token)

    res.status(201).json({
        message:"User registered Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email

        }
    })






}


/**
 * @name loginUserController
 * @description login a user ,expects email and password in req.body
 * @access Public
 */

async function loginUserController(req,res){
    const{email,password}=req.body

    const user=await userModel.findOne({ email })

    if(!user){
        return res.status(400).json(
         {   message:"Invalid email or password"
        })
    }


    const isPasswordValid= await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(400).json({
            message:"Invalid email or password"
        })
    }


    const token=jwt.sign(
        {id:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:"8d"}
    )

    res.cookie=("token",token)


    res.status(200).json({
        messgae:"User Logged In Successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })



}

async function logoutUserController(req,res){
    const token =req.cookies.token

    if(token){
        await blacklistTokenModel.create({token})

    }

    res.clearCookie("token")

    res.status(200).json({
        messagge:"User Logged out successfully"
    })






}


async function getMeController(req,res){
    const user= await userModel.findById(req.user.id)   // ID comes form JWT (not DB)
                                                        // DB is using that ID to return full user data


    res.status(200).json({                        
        message:"user details fetched successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email
        }
    })





}

module.exports={
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
}
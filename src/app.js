const express=require('express')
const cookieParser=require("cookie-parser")
const authRouter=require("./routes/auth.routes")
const app=express()

app.use(express.json())
app.use(cookieParser())

/* require all the routes here*/ 
/* using all the routes here */
app.use("/api/auth",authRouter)

module.exports=app


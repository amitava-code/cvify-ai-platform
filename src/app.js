const express=require('express')
const authRouter=require("./routes/auth.routes")
const app=express()

app.use(express.json())

/* require all the routes here*/ 
/* using all the routes here */
app.use("/api/auth",authRouter)

module.exports=app


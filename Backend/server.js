require("dotenv").config()
const app =require("./src/app")
const connectToDB=require("./src/config/db")
const { resume , selfDescription , jobDescription }= require("./src/services/temp");
const generateInterviewReport= require("./src/services/ai.service");

generateInterviewReport({ resume, selfDescription, jobDescription})

connectToDB()

app.listen(3000,()=>{
    console.log("Server is Running on Port 3000")
})
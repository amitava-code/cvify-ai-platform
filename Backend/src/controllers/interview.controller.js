const pdfParse= require("pdf-parse")
const generateInterviewReport= require("../services/ai.service")
const interviewReortModel=require("../models/interviewReport.model")



async function generateInterviewReportController(req,res){
    

    const resumeContent= await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText()
    const { selfDescription, jobDescription }= req.body

    const interviewReportByAi = await generateInterviewReport({
        resume: resumeContent.text,
        selfDescription,
        jobDescription
    })

    const interviewReport= await interviewReortModel.create({
        user:req.user.id,
        resume: resumeContent.text,
        selfDescription,
        jobDescription,
        ...interviewReportByAi
    })
    res.status(201).json({
        message:"interview report geenrated successfully",
        interviewReport
    })


}


module.exports= { generateInterviewReportController}
const express= require("express");
const authMiddleware= require("../middleware/auth.middleware")
const interviewController=require("../controllers/interview.controller")
const interviewRouter= express.Router()
const upload= require("../middleware/file.middleware")
/**
 * @route POST /api/interview
 * @descriptio generate new interview Report on the bassi of
   self description, resume pdf and job description.
   @access private
 */
interviewRouter.post("/", authMiddleware.authUser, upload.single("resume"), interviewController.generateInterviewReportController)

module.exports=interviewRouter
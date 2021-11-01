const router = require("express").Router();
const Doctor=require("../db/models/doctor.model")
const doctorController=require("../controller/doctor.controller")

router.post("/register",doctorController.register)
//router.get("/test",(req,res)=>res.send("test doctor"))

module.exports=router;
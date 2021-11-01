// run  required scripts
require("dotenv").config();
require("../db/connection")
//call required express
const express=require("express");

//create express instance.
const app=express()

//use json  urlencoded and (middleware ==> compare everything to json)
app.use(express.json())

app.use(express.urlencoded({extended:true}))

//routes
const doctorRoutes=require("..//routes/doctor.routes")
const patientRoutes=require("..//routes/patient.routes")
//const patientRoutes=require("..//routes/admin.route")

app.use("/doctor",doctorRoutes);
app.use("/patient",patientRoutes);



module.exports=app;
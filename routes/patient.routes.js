const router = require("express").Router();
const UserController=require("../controller/patient.controller")

router.post("/register",UserController.register)

router.patch("/activate/:id",UserController.activatePatient)
module.exports=router;
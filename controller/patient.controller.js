const Patient=require("../db/models/patient.model");
const emailSetting=require("../helper/email.helper");
const generateTxt=require("../helper/generateEmailTxt")

class PatientController{

    static register= async(req,res)=>{
        try{
            let patient = new Patient(req.body)
            await patient.save()
            let emailTxt=generateTxt();
          //  emailSetting(patient.email,emailTxt,"New Registeration")
          
            res.send({apiStatus:true,message:"Registered",data:patient})
    
        }
        catch(e){
            res.status(500).send({
                apiStatus :false,
                data:e.message,
                message:"error in adding patient"
            })
        }
    }

    static activatePatient = async(req,res)=>{
        let patientID=req.params.patientID
        try{

            let patient=await Patient.findById(patientID)
            if(!patient){
                res.status(404).send({apiStatus:false,message:"Patient not found",data:""})
            }
            patient.status=true
            await patient.save()
            res.status(200).send({apiStatus:true,message:" Activated",data:user})
        }
        catch(e){
            res.status(500).send({
                apiStatus :false,
                data:e.message,
                message:"error in activating  patient"
            })
        }
    }
}
module.exports=PatientController
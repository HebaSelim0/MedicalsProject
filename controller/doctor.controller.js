const Doctor=require("../db/models/doctor.model");
const emailSetting=require("../helper/email.helper");
const generateTxt=require("../helper/generateEmailTxt")

class doctorController{
    static register=async(req,res)=>{
        try{
            let doctor = new Doctor(req.body)
            await doctor.save()
            let emailTxt=generateTxt();
           // emailSetting(doctor.email,emailTxt,"New Registeration")
          
            res.send({apiStatus:true,message:"Registered",data:doctor})
    
        }
        catch(e){
            res.status(500).send({
                apiStatus :false,
                data:e.message,
                message:"error in adding user"
            })
        }
    }

}
module.exports=doctorController
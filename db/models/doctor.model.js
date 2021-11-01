/** id , name ,gender,tel, email , image,appoitments , [Assistants] , veseta 
 ,available schedule,total,[patients] */

 const mongoose=require("mongoose");
const validator=require("validator");

const doctorSchema=new mongoose.Schema({
    name :{
        type:String,
        trim:true,
        minlength:6,
        maxlength:20,
        required:true
    },
    gender :{
        type:String,
        trim:true,
        required:true,
        enum:['Male','Female']
    },
    age:{
        type:Number,
        minlength:27
    },
    phone :{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value,'ar-EG')) throw new Error("Invalid phone number")
        }
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:[true,'used before'],
        validate(value){
            if(!validator.isEmail(value)) throw new Error("Invalid Email")
        }
    },
    password:{
        type:String,
        trim:true,
        required:true,
        //match:,
        minlength:8,
        maxlenght:20
    },
    image:{
        type:String,
        trim:true
    },
    //Assistants :[],
    price:{
        type:Number,
        required:true
    },
    availableSchedule:[
        {availableSchedule:{day:String, times:[{from:Date, to:Date}]}}
    ],
    status:{
        type:Boolean, //avalaible or not avalaible
        default:false
    },
    notes:{
        type:String,
        trim:true
    },
    isAdmin :
    {
       type: Boolean
    }

    //patients:[]

})

const doctor=mongoose.model("doctor",doctorSchema);
module.exports=doctor;


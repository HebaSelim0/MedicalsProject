/** id , name ,gender,tel, email ,
 *  image,booking /booked appoitments , history , money paid */

 // "name":"",   "gender" :""  , "age":"" , "phone":""  ,"email" :""  , "password":"" , "iamge":"" , 
 //"bookingAppoitment" :"" ,"history":"" , "price" :""  ,"notes" :""
 const mongoose=require("mongoose");
const validator=require("validator");

const patientSchema=new mongoose.Schema({
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
        minlength:10
    },
    phone :{
        type:String,
        trim:true,
        required:true,
        validate(value){
            if(!validator.isMobilePhone(value,'ar-EG')) throw new Error("Invalid phone number");
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
    Address :{
        type:String,
        trim:true,
        required:false,
        //match:,
        minlength:8,
        maxlenght:100
    },

    image:{
        type:String,
        trim:true
    },
    bookingAppoitment:
    {
        bookingTime:{day:String, times:[{from:Date, to:Date}]}
    } ,
    //file -- report 
    history :[

    ],
   /* price:{
        type:Number,
        required:true
    },*/
    notes:{
        type:String,
        trim:true
    },
    isAdmin :
    {
       type: Boolean
    }

})

const patient=mongoose.model("patient",patientSchema);
module.exports=patient;


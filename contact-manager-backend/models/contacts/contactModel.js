const mongoose=require("mongoose");
const contactSchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Designation:{
        type:String,
        required:true
    },
    Company:{
        type:String,
        required:true
    },
    Industry:{
         type:String,
         required:true
    },
     Email:{
        type:String,
        required:true
     },
     PhoneNumber:{
        type:Number,
        required:true
     },
     Country:{
        type:String,
        required:true
     },
     created_date:{
       type:Date,
       default:Date.now,
     }

})
module.exports=contact=mongoose.model("contacts",contactSchema);
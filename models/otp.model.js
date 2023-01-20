const mongoose=require('mongoose')
const otpSchema=new mongoose.Schema({
    otp:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('OTP',otpSchema)
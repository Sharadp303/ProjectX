const mongoose=require('mongoose')
const User =require('../models/user.model')
const OTP=require('../models/otp.model')
const otp=require('otp-generator')

async function signUp(req,res){
      
       const mobile=req.body.mobile
       const  userType =req.body.userType
 
    
    try{
        const newOtp= await otp.generate(6,{digits:true,upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false})
            await OTP.create({otp:newOtp})
            res.send({mobile:mobile,
                      otp:newOtp})
        }
         
    catch(err){
        console.log(err)
        res.status(500).send({msg:'Internal server Error'})
    }
}

async function verifyOtp(req,res){
    const otp=req.body.otp
    const mobile=req.body.mobile
    const result=await OTP.findOne({otp:otp})
    if(result){
      if(otp && mobile){
        await OTP.deleteOne({otp:otp})
        await User.create({mobile:mobile})
        res.send({msg:"Otp verified"})}
        else {
            await OTP.deleteOne({otp:otp}) 
            res.send({msg:"Otp verified"})}
        }
    
    else{
    res.send({msg:"Incorrect Otp"})}

 }

async function signIn(req,res){
    const mobile=req.body.mobile

    try{
         const result= await User.findOne({mobile:mobile})
         if(result){
            const newOtp= otp.generate(6,{digits:true,upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false})
            await OTP.create({otp:newOtp})
            res.send(newOtp)       
        }
        else{
            res.send({msg:"Invalid Number"})
                return
        }
              
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:'Internal server Error'})
    }
}
module.exports={signUp,signIn,verifyOtp}
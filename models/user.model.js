const mongoose=require('mongoose')
 const userSchema= new mongoose.Schema({
    mobile:{
      type:Number,
      required:true,
      unique:true
    },
    userType:{
        type:String,
        required:true,
        default:"USER"

    },
    createdAt:{
          type:Date,
          immutable:true,
          default:()=>{
            return Date.now();
          }
    },
    updatedAt:{
        type:Date,
        default:()=>{
            return Date.now();
        }

    }


 })
 module.exports= mongoose.model('User',userSchema)
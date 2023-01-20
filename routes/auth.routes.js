const express= require('express')
const {signUp,signIn,verifyOtp}=require('../controller/auth')


const routes= express.Router()

routes.post('/api/signUp',signUp)
routes.post('/api/signIn',signIn)
routes.post('/api/verifyOtp',verifyOtp)



module.exports=routes
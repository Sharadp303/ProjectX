const express= require('express')
const {fillDetails,updateDetails,deleteDetails}=require('../controller/form')
const router1=express.Router()

router1.post('/api/form/fill',fillDetails)
router1.put('/api/form/update/:id',updateDetails)
router1.delete('/api/form/delete/:id',deleteDetails)

module.exports=router1
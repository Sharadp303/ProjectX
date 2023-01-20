const mongoose=require('mongoose')
const Form=require('../models/form.model')

async function fillDetails(req,res){
    const obj={
        Full_Name:req.body.Full_Name,
        Headline : req.body.Headline,

        Company_Name:req.body.Company_Name,
        Position:req.body.Position,
        Date_of_Joining:req.body.Date_of_Joining,
        Date_of_Resign:req.body.Date_of_Resign,
        Work_Description:req.body.Work_Description,
        Used_Skills:req.body.Used_Skills,

        Skills_Name:req.body.Skills_Name,
        Years_of_Experince:req.body.Years_of_Experince,

        Project_Title:req.body.Project_Title,
        Project_URL:req.body.Project_URL,
        Project_Discription:req.body.Project_Discription,
        Project_Duration:req.body.Project_Duration,

        Certificate_Name:req.body.Certificate_Name,
        Issuing_organisation:req.body.Issuing_organisation,
        Certificate_Link:req.body.Certificate_Link,
        Issue_date:req.body.Issue_date,

        Course_Name:req.body.Course_Name,
        Issuing_organisation:req.body.Issuing_organisation,
        
        Email:req.body.Email,
        Phone:req.body.Phone,
        Skype_Id:req.body. Skype_Id,
        
    }
    try{
const result =await Form.create(obj)
res.send(result)
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal Server error"})
    }
}

async function updateDetails(req,res){
    const id=req.params.id
    try{
const result =await Form.findOneAndUpdate({_id:id},{Headline:req.body.Headline})
res.status(201).send({msg:"Updated successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal Server error"})
    }
}

async function deleteDetails(req,res){
    const id=req.params.id
    try{
const result =await Form.deleteOne({_id:id})
res.status(201).send({msg:"Deleted successfully"})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg:"Internal Server error"})
    }
}

module.exports={fillDetails,updateDetails,deleteDetails}
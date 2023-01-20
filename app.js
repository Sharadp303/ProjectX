const express=require('express')
const {serverPort}=require('./config/server.config')
const {dbconfig}= require('./config/db.config')
const mongoose=require('mongoose')
const User=require('./models/user.model')
const routes= require('./routes/auth.routes')
const router1=require('./routes/form.routes')


const app=express()
app.use(express.json())
app.use(routes)
app.use(router1)


mongoose.connect(dbconfig).then(()=>console.log("connected to database")).catch(console.log)

app.listen(serverPort,()=>{
    console.log("server running on localhost:8500")
})


require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
const Port = process.env.PORT || 5002
const dbconnect = require("./connections/conn")
app.use("/",router) 
// app.get("/test",(req,res)=>{
//     res.send("its working")
// })








app.listen(Port,()=>{
    console.log(`server is running at ${Port}`)
})
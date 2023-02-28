const express=require("express");
const connectDB =require("./config/db.js");
const dotenv=require("dotenv")
const Contact=require("./models/contactModel")


dotenv.config();
const app=express();
connectDB()

const PORT=process.env.Port || 3000

 app.get("/",(req,res)=>{
    res.end("Hello world")
 })

 app.listen(PORT,console.log(`server running in ${PORT} port`))
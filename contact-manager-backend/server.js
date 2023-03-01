const express=require("express");
const connectDB =require("./config/db.js");
const cors=require('cors');
const bodyParser=require('body-parser')

const dotenv=require("dotenv")

const registerAndLogin = require('./routes/RegisterAndLogin');




dotenv.config();
const app=express();
connectDB()

const PORT=process.env.Port || 3000
app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(registerAndLogin);



 app.listen(PORT,console.log(`server running in ${PORT} port`))
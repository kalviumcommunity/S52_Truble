const express = require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const TroubleModel=require("./models/Troublemodel")
require('dotenv').config()
const app = express()
const router=require('./routes')
const mongouri=process.env.mongouri
mongoose.connect(mongouri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db=mongoose.connection
db.on('error', console.error.bind(console, "Mongo DB connection error"))
db.once('open', ()=>{
    console.log("Connected to mongoDB through mongoose")
})

app.use(express.json())
app.use(cors())
app.use("/",router)

app.get("/",(req, res)=>{
    if(db.readyState===1){
        res.send("Connected to mongoDB through mongoose")
    }else{
        res.send("failed to connect to mangodb")
    }
})

app.get("/troubles", (req, res)=>{
    TroubleModel.find()
    .then((troubles)=>res.json(troubles))
    .catch((error)=>res.json(error))
})

app.listen(4000, ()=>{
    console.log("Server is running at local host : 4000")
})  
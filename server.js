const express = require('express')
const mongoose=require("mongoose")
require('dotenv').config()
const app = express()
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
app.get("/",(req, res)=>{
    if(db.readyState===1){
        res.send("Connected to mongoDB through mongoose")
    }else{
        res.send("failed to connect to mangodb")
    }
})

app.listen(3000, ()=>{
    console.log("Server is running at local host : 3000")
})
const express = require('express')
const mongoose=require("mongoose")
const cors=require("cors")
const Joi = require("joi")
const cookieParser = require("cookie-parser")
const userRoutes = require("./userRoutes")
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
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
  }));
app.use(cookieParser())
app.use("/",router)
app.use("/auth", userRoutes)

app.get("/",(req, res)=>{
    if(db.readyState===1){
        res.send("Connected to mongoDB through mongoose")
    }else{
        res.send("failed to connect to mangodb")
    }
})
const createPetSchema = Joi.object({
    trouble: Joi.string().required().pattern(new RegExp('^[A-za-z ]+$')).messages({
      'string.pattern.base': `"trouble" should only contain alphabetic characters`
    })
  })

app.get("/troubles", (req, res)=>{
    TroubleModel.find()
    .then((troubles)=>res.json(troubles))
    .catch((error)=>res.json(error))
})

app.post("/createTrouble", (req, res)=>{
    const {error} = createPetSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    TroubleModel.create(req.body)
    .then(eachTrouble => res.json(eachTrouble))
    .catch(err => res.json(err))
})

app.get("/getTrouble/:id", (req, res) => {
    const id = req.params.id
    TroubleModel.findById({_id:id})
    .then(trouble => res.json(trouble))
    .catch(err => res.json(err))
  })
  
  app.put("/updateTrouble/:id", (req, res) => {
    const id = req.params.id
    const {error} = createPetSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    TroubleModel.findByIdAndUpdate({_id: id}, {trouble: req.body.trouble})
    .then(trouble => res.json(trouble))
    .catch(err => res.json(err))
  })
  
  app.delete("/deleteTrouble/:id", (req, res) => {
    const id = req.params.id
    TroubleModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
  })

app.listen(process.env.PORT, ()=>{
    console.log("Server is running at local host : 4000")
})  
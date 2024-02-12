const express=require("express")
const router=express.Router()
router.get("/trouble", (req,res)=>{
    res.status(200).send("get request")
})
router.post("/trouble", (req,res)=>{
    res.status(200).send("post request")
})
router.put("/trouble", (req,res)=>{
    res.status(200).send("put request")
})
router.delete("/trouble", (req,res)=>{
    res.status(200).send("delete request")
})
module.exports=router
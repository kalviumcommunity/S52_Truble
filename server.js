const express = require('express')
const app = express()
app.get("/ping",(req, res)=>{
    res.send("pong")
})
app.listen(3000, ()=>{
    console.log("Server is running at local host : 3000")
})
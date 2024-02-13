const mongoose=require("mongoose")
const TroubleSchema=new mongoose.Schema({
    trouble: String
})
const TroubleModel=mongoose.model("troubles", TroubleSchema)
module.exports=TroubleModel
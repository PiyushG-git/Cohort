const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:[true,"With this email user account already exists"]
    },
    password:String
})
// users - collection name
//Schema is for formate
// Model is for Operation
const userModel=mongoose.model("users",userSchema)

module.exports=userModel
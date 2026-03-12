const express =require('express')
const userModel = require('../models/user.model')
const jwt=require("jsonwebtoken")
const crypto=require("crypto")

const authRoute=express.Router()

authRoute.post("/register",async(req,res)=>{
    const {email,name,password}=req.body

    const isUserAlreadyExists=await userModel.findOne({email})

    if(isUserAlreadyExists){
        return res.status(400).json({
            message:"User already exists with this email address"
        })  
    }

    const hashpassword=crypto.createHash("md5").update(password).digest("hex")

    const user=await userModel.create({
        email,password:hashpassword,name
    })

    const token=jwt.sign({
        id:user._id,
        email:user.email
    },process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(201).json({
        message:"user registered",
        user,token
    })
})


//day-98
// check that we have cookie or not
authRoute.post("/protected",(req,res)=>{
    console.log(req.cookies);
    res.status(200).json({
        message:"This is protected routes"
    })
})

// jb "/login" pr request ati hai toh yehh call back jata hai - isse "controller" bhi bolte hai
authRoute.post("/login",async(req,res)=>{
    const{email,password}=req.body
    const user=await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"User not found with this email address"
        })
    }
    const isPasswordMatched = user.password===crypto.createHash("md5").update(password).digest("hex")

    if(!isPasswordMatched){
        return res.status(401).json({
            message:"Invalid password"
        })
    }

    const token =jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie("jwt_token",token)

    res.status(200).json({
        message:"user logged in",
        user
    })
})

module.exports=authRoute
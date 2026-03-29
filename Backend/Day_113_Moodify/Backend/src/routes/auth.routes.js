// const express =require("express")
// const Routes=express.Router


const {Router} =require("express")
const { registerController, loginController } = require("../../../../Day_101_Project_final/Backend/src/controllers/auth.controller")

const router=Router()

router.post('/register',registerController)

router.post('/login',loginController)

module.exports=router
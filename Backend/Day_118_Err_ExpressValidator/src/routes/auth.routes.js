import express from "express"
import { registerUser } from "../controllers/auth.controller.js"
import { registerValidation } from "../validation/auth.validation.js"

// expres-validator
// import {body,validationResult} from "express-validator"

const authRouter=express.Router()

authRouter.post("/",registerValidation,registerUser)

export default authRouter
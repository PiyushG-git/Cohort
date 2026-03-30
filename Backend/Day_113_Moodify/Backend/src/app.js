const express=require("express")
const cookiePraser=require("cookie-parser")
const cors =require("cors")

const app=express()

app.use(express.json())
app.use(cookiePraser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

const authRoutes=require("./routes/auth.routes")

app.use("/api/auth",authRoutes)

module.exports=app
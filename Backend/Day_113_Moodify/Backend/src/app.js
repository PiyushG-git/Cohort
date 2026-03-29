const express=require("express")
const cookiePraser=require("cookie-parser")

const app=express()

app.use(express.json())
app.use(cookiePraser())

const authRoutes=require("./routes/auth.routes")

app.use("/api/auth",authRoutes)

module.exports=app
import express from "express"
import authRouter from "./routes/auth.routes.js"
import handleError from "./middlewares/error.middleware.js"


const app=express()
app.use(express.json())

app.use("/api/auth",authRouter)

// write in last 
// without this err shows in html format
// but with the help of this middleware it will show in message format
app.use(handleError)

export default app
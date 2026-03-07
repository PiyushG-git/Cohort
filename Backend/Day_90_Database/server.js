// subse phele yehh wali line likhni hoti hai
require("dotenv").config()

//server.js-> server ko start krna
//  and database se connect krna

const mongoose=require("mongoose")
const connectToDb=require('./src/config/database.js')
const app=require('./src/app.js')



// this function write in databse.js 

// function connectToDb(){
//     mongoose.connect("mongodb+srv://cohort-practice:cohort-practice@cluster0.hsya72k.mongodb.net/day-6")
//     .then(()=>{
//         console.log("Connected to Database");
//     })
// }

// mongoose.connect -> server or database ko connect krta h
connectToDb();



app.listen(3000,()=>{
    console.log("server is running on port 3000");  
})


// this is callback - ()=>{console.log("server is running on port 3000");  }
// API-Application Programing Interface

 

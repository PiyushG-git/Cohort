// server ko create krna


const express = require("express")
const noteModel=require("./models/note.model")
const cors =require("cors")

const path=require("path")

const app=express()

app.use(express.json())
app.use(cors())
app.use(express.static("./public"))
// using this you can access the any file in "./public" publicly as"http/localhost:3000/index.html"

// post api-api/notes
// create new note and saave data in monogodb
// res.body={title,description}

app.post("/api/notes",async(req,res)=>{
    const{title,description}=req.body
    const note=await noteModel.create({
        title,
        description
    })
    res.status(201).json({
        message:"note created successfully",
        note
    })
})


//GET - /api/notes
// fetch all the notes data from and send them in the response
app.get("/api/notes",async(req,res)=>{
    const notes =await noteModel.find()
    res.status(200).json({
        message:"Notes fetched succesfully",
        notes
    })
})

// delete - /api/notes/:id
// delete note with the id from req.param

app.delete('/api/notes/:id',async(req,res)=>{
    const id=req.params.id
    // console.log(id);
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note deleted successfully."
    })
    
})

// Patch /api/notes/:id
// updates the description of the note by id
// req.body={desciption} 

app.patch('/api/notes/:id',async(req,res)=>{
    const id=req.params.id
    const {description}=req.body
    await noteModel.findByIdAndUpdate(id,{description})
    res.status(200).json({
        message:"Note updated successfully."
    })
})

// adding the public folder
// app.use('*name',(req,res)=>{
//     res.send("this is wild card")
// })  
//* -> wild card route -> handle the api which are not created

app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname,"..","/public/index.html"))
})  




module.exports=app
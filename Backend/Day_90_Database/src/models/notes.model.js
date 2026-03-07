const mongoose = require("mongoose")


const noteSchema=new mongoose.Schema({
    title:String,
    description:String,
})

// model->database me aagr kuch bhi changes krne tohh oske liye use krte hai model

const noteModel= mongoose.model("notes",noteSchema)

// collections= 100 nodes(user data)
// "notes" collection me aandr iss "noteSchema" se jo nodes bnage vo rhke jaege

module.exports=noteModel
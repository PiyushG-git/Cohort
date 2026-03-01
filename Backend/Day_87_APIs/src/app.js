
//app.js-> server create krna
//app.js-> server ko config krna


const express=require("express")

const app=express()

const notes=[]

app.use(express.json())

// creating a end point or creating an api
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body)
    // res.send("note created");
    res.status(201).json({
        message:"Note created successfully"
    })
})

app.get('/notes',(req,res)=>{    
    // res.send(notes)
    res.status(200).json({
        notes:notes
    })
})

// params
app.delete('/notes/:index',(req,res)=>{
    //  console.log(req.params.index);
    delete notes[req.params.index]  //it doesnot delete it update with null
    // res.send("note deleted succesfully")
    res.status(204).json({  //204 data nhi dikhta
        message:"note deleted succesfully"
    })
})

// patch /notes/:index
// req.body = {description :- "sample modified desription"}

app.patch('/notes/:index',(req,res)=>{
    notes[req.params.index].description=req.body.description
    // res.send("Note updated successfully")
    res.status(200).json({
        message:"Note Updated successfully"
    })
})


module.exports=app
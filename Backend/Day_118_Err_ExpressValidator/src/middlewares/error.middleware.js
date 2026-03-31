// function handleError(err,req,res,next){
//     res.status(500).json({
//         message:err.message
//     })
// }


// custom err status 
// function handleError(err,req,res,next){
//     res.status(err.status).json({
//         message:err.message,  //what the err
//         stack:err.stack      //where error comes(location of error)
//         //stack is only use in developement not in production(because it can leak the file structure)
//     })
// }


import dotenv from "dotenv"

dotenv.config()

function handleError(err,req,res,next){
    const response={
        message:err.message
    }

    if(process.env.NODE_ENVIRONMENT==="development"){
        response.stack=err.stack
    }

    res.status(err.status).json(response)
}


export default handleError


// it is use in app.js
// in the last
// export async function registerUser(req,res,next) {
//     throw new error("encounter an error while registering new user")
// }

//har controller ke ander next paramter bhi hota hai
// export async function registerUser(req,res,next) {
//     try {
//         throw new error("encounter an error while registering new user")
//     } catch (err) {
//         next(err)
//     }
// }




// when we wrong custmised error as in midlleware it hit 500 error alway,but error may be 400...etc
// example when password is topo week it will through the 400 status code

// export async function registerUser(req,res,next) {
//     try {
//         throw new error("password is too weak")
//     } catch (err) {
//         err.status=400
//         next(err)
//     }
// }







export async function registerUser(req,res,next) {
    try {
        console.log(user);  //error:user is not define
    } catch (err) {
        err.status=400
        next(err)
    }
}





// **********************
// Express Validator
// ***************************




















/**
 * user => 
 * {
 * username:{ type: String, required: true },
 * email:{ type: String, required: true,unique: true },
 * password:{ type: String, required: true }
 * }
 */
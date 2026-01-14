// -Introduction to Error handling
// -Common types of errors in js -['Syntax errors','Runtime errors','Logical errors']
// -Undersatnding the Error object -['message','name','stack']
// -Handling exceptions using 'try-catch','try-catch-finally'
// -How to throw Errors in JavaScript
// -Error Handling in Asynchronous Code



// syntax error->aapne code likhte waqt galti kardi

// Runtime error-> code likhte time error nhi hai, jb chlega tb error dega
// function abcd(){
//     let a=12;
//     console.log(a.name);  //a obj nhi hai 
// }
// abcd()

// Logical error->aapne code ko kuch karna chahiye tha par wo kar kuch aur raha hai
// function add(a,b){
//     return a-b;
// }
// add(4,2)


// try{
//     let a=12;
//     console.log(a.age.name);
// } catch(err){
//     console.error(err);
// }

// try{
//     let a=12;
//     console.log(a.age.name);
// } catch(err){
//     console.error(err.message);
// }

// try{
//     let a=12;
//     console.log(a.age.name);
// } catch(err){
//     console.error(err.name);
// }

// try{
//     let a=12;
//     console.log(a.age.name);
// } catch(err){
//     console.error(err.stack);
// }

// try{
//     let a=12;
//     console.log(a.age.name);
// } catch(err){
//     console.error(err);
// }
// finally{
//     console.log("hello");  //use as a loader
// }




// throw new Error("something get wrong")
// this is like a custom error
try{
    let a=12;
    console.log(a.age.name);
} catch(err){
    // throw new Error("Something get wrong")
    // console.error(new Error("Something get wrong"));
}







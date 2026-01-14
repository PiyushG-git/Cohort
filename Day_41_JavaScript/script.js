// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

// function runTwice(fn){
//     fn();
//     fn();
// }
// runTwice(function(){
//     console.log("Heloo");
// });



// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

// let gobal=0;
// function ipure(a,b){
//     gobal++;
//     console.log(a+b+gobal);
// }
// ipure(1,2);
// ipure(1,2);

// function pure(a,b){
//     console.log(a+b);
// }
// pure(1,2);
// pure(1,2);



// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.

// function abcd({name,age}){
//     console.log(name);
// }
// abcd({name:"Piyush",age:21})



// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).

// let obj={
//     name:"Piyush",
//     fnc:function(){
//         console.log(this);    //this = obj
//     },
//     fnc2:()=>{
//         console.log(this);    //arrow function parent se value leta hai 
//         // isliye this = window
//     }
// }
// obj.fnc();
// obj.fnc2();

// let obj1={
//     name:"Piyush",
//     fnc:function(){
//         let fnc2=()=>{
//         console.log(this);  //arrow function parent se value leta hai 
//     }   //this = obj
//     fnc2();
//     },
    
// }
// obj1.fnc();

// let obj1={
//     name:"Piyush",
//     fnc:function(){
//         function fnc2(){
//         console.log(this);  //arrow function parent se value leta hai 
//     }   //this = window kyuki value revaied hogi
//     fnc2();
//     },
    
// }
// obj1.fnc();



// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.

// let arr=[1,2,3,4,5];
// let newarr=arr.map(function(val){
//     return val*val;
// });
// console.log(newarr);




// 6. Use `filter()` to get only even numbers from an
// array.

// let arr=[1,2,3,4,5,6,7,8,9];
// let newarr=arr.filter(function(val){
//     return val%2==0;
// })
// console.log(newarr);




// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

// let salary=[1000,2000,3000];
// let ans=salary.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(ans);




// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

// let names=["piyush","avi","avinya"];
// let ans = names.some(function(val){
//     return val.length >3;
// })
// console.log(ans);



// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.

// let user={
//     name:"Piyush",
//     age:21,
//     email:"xyz"
// }
// Object.freeze(user);  //ab change in kr paoge & new value add nhi kr skte
// user.age=19;   //nhi hoga

// Object.seal(user);  //change ho skta but new vlaue add nhi kr skte hai
// user.name="heloo";




// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.

// let obj={
//     user:{
//         name:"Piyush",
//     address:{
//         city:"Agra",
//     },
//     }
// }
// let {city}=obj.user.address;
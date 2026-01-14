// Parameters in JavaScript-['required','destructured','rest','defalt'];

//required
// function abcd(a,b,c,d){
//     //agar aapne parameter banaaye and apne arguments nahi bheje to fir wo val parameter ki undefined ho jaayegi
// }
// abcd();


// this is not a good pratice
// function abcd(obj){
//     console.log(obj);

// }
// abcd({name:"piyush",age:21});



// so
// use destructuring
// function abcd({name,age}){
//     console.log(name,age);

// }
// abcd({name:"piyush",age:21});



//rest
// function abcd(...val){
//     console.log(val);
    
// }
// abcd(1,2,3,4,5,6);



//default
// function abcd(a,b,c=0){
//     console.log(a,b,c);
    
// }
// abcd(1,2);




//- Arguments in JavaScripts -['positional','default,'spread']


//positional
// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }
// abcd(1,2,3,4);


//spread
// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
    
// }
// let arr=[1,2,3,4];
// abcd(...arr);


//-"Classic Function","Nested Function"(function within function),"Scope Chain" in Javascript

// let a =12;
// function abcd(){
//     let b=13;
//     function defg(){
//         console.log(b);
//     }
// }
// abcd();



// -Understanding Immeditely Invoked function Expression (IIFE)
// (function(){
//     let balance=5000;
// })();


// -More FUnction in js - ['Arrow Function','Fat Arrow','Anonymous','Higher Order','Calback','First Class','Pure Function','Impure Functioon']

// function abcd(){}

// let func = ()=>{
//     console.log("hii");
// }
// func();
// arrow function same as fat arrow


// anonoymous
// function(){}


//higher order
// hof - ek aisa func jo ki return karde ek aur function
// or wo func accept karle ek aur fnc paarameter mein


// function abcd(){
//     return function(){
//     }
// }

// function abcd(a){
// }
// abcd(function(){
// });



// callback
// function abcd(a){
// }
// abcd(function(){
// });      isme jo function pass kr rhe hai vo callback hai



// first class
//fcf is concept like hawa (kuch hai but thikta nhi hai nhi) 
// function us language mein varible ki trah use ho skte hai


//Pure function
// same input = same output
//koi side effect nhi hoga
// let a=12;
// function abcd(val){
//     console.log(val+2);
// }
// abcd(12);
// abcd(12);



//Impure function
// same input = diff o/p ho skta hai
//koi na koi side effect hoga
// let a=12;
// function abcd(val){
//     console.log(val+Math.random());
// }
// abcd(12);
// abcd(12);




//  -Understanding Scoping in js-['Gobal scope','Function scope']
// -Understanding 'Closures','Scoping Rule'

// closure -> ek function hai jo return karta hai function but returning function jo hai wo parent func ka koi variable use karega
// function abcd(){
//     let a =12;
//     return function(){
//         console.log(a);
//     }
// }


// What are Arrays in JavaScript and how to Create an Arrays
// let arr=[1,2,3,4,5,6];
// let arr2 = new Array();

// -Undersatand how to Accessing Elements in Arrays

// - Functions on Arrays-['Push','pop','shift','unshift','indexOf','arrray destrucing','filter','some','map','reduce','spread operator','slice','reverse','sort','join','toString']
// arr.push(10);
// arr.pop();
// arr.shift(0);
// arr.unshift(1);
// arr.indexOf(4);
// let[a,,b]=arr;

// let arr1=[1,2,3,4];
// let newarr=arr1.filter(function(val){
//     return val<3;
// })

//skip-some,map,reduce,slice,reversw,sort,join,toString

// spread operator
// let arr=[1,2,3,4];
// let arr2=[...arr];





//-Iterating Over Arrays using -[For loop, forEach]
// let arr=[1,2,3,4];
// for(let i=0;i<4;i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(val){
//     console.log(val); 
// })


//-Understanding What are Objects in Javascript-[key-value pair]
// let obj={
//     name:"Piyush",
//     age:21
// };

// let obj2=new Object();


// -Creating Objects,Acceing Propperties,Deleting Property and Nested Objects.
// let obj ={
//     name:"Piyush",
//     socials:{
//         instagram:"xyz...",
//         facebook:"qwe"
//     }
// }
// obj['name'];
// obj.name;
// delete obj.name;

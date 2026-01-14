//  Recognise How Objects Are Stored, Traverse Keys of an Object, Array as Object.
// Timing Events 'setTimeout()`, `setInterval()', 'clearTimeout(), 'clearInterval()^
// - Operation in Objects - ['freeze', `seal', 'destructuring, object methods, this keyword]
//  Write a function sayHello() that prints "Hello JavaScript".





// Q Create a function add(a, b) that returns their sum and log the result.

// function add(a,b){
//     return a+b;
// }
// let ans=add(1,2);
// console.log(ans);



// Q Write a function with a default parameter name = "Guest" that prints "Hi <name>".

// function greeting(guest="Guest"){
//     console.log(`hii ${guest}`);
// }
// greeting("Piyush");



//  Q Use rest parameters to make a function that adds unlimited numbers.
//  Method-1 using foreach
// function addUnlimited(...nums){
//     let sum=0;
//     nums.forEach(function(val){
//         sum+=val
//     });
//     console.log(sum);   
// }
// addUnlimited(1,2,3,4,5,6);

// Method -2 using forloops (nums.lenght)

// Method-3 using .reduce()
// function addUnlimited(...nums){
//     let ans=nums.reduce(function(acc,val){
//         return acc+val;
//     },0)
//     console.log(ans);   
// }
// addUnlimited(1,2,3,4,5,6);


//  Q Create an IIFE that prints "I run instantly!".
// (function(){
//     console.log("I run instantly");
// })();


// Q Make a nested function where the inner one prints a variable from the outer
// function parent(){
//     let a=12;
//     function Child(){
//         console.log(a);   
//     }
//     Child();
// }
// parent();



//Q Create an array of 5 fruits. Add one at the end and remove one from the beg
// let arr=["apple","guava","grapes","mango","banana"];
// arr.push("pear");
// arr.unshift("oranges");



//Q Use a for loop to print all elements of an array.
// let arr=[1,2,3,4,5,6];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }



// Create an object person with key name,age,and city,and print each keys's value
// let obj={
//     name:"Piyush",
//     age:21,
//     city:"Agra"
// }
// for(let key in obj){
//     console.log(obj[key]);
// }


// Use setTimeout() to log "TIme's up!" after 2 seconds

// setTimeout(() => {
//     console.log("Time's up!");
// }, 2000);
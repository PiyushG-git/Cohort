//- Introduction to Asynchrony in JavaScript
//- Introduction to 'callbacks' and Problems in Callbacks
//- Understanding 'promises'-'pending','resolved','rejected'
//- how to prevent  callback hell using 'async' &'await'
//-'setInterval' & 'setTimeout' in js
// .........................................

// js is a single threaded
// it has a synchronous approach
// so we use manaually make asynchronous approach 



// callback ->ek function jo turant nahi chalega ye chalega jb appka koi kamm complete hoga
// like setTimeout

// example
// ...................
// getDataFromInstagram("ayush123",function(){
// })
// ayush123 ka data lekr aega fir function chalega or yehh function callback hai

// callback->koi or function mein pass krte ho
// example
//...............
// function abcd(fn){
//     fn();
// }
// abcd(function(){})



// callback
// ....................................
// function amitSeDetailsLaao(address,cb){
//     console.log("fetching details....");
//     let val={
//         lat:25,
//         lng:45,
//         address:address
//     }
//     setTimeout(()=>{
//         // cb({lat:25,lng:45});
//         cb(val);
//     },3000)
// }
// function ....,address....,callback
// amitSeDetailsLaao("indrapuri",function(details){
//     console.log(details);
//     console.log(details.lng);
// })
// debouncing and throttling
// .............................


// debouncing
//jb hum search krte hai jo har time search naa krke ek delay ke baad hi search kre

// function debounce(fn,delay){
//     let timer;
//     return function(){
//         clearTimeout(timer);
//         timer=setTimeout(fn,delay);
//     };
// }

// document.querySelector('#search')
// .addEventListener("input",debounce(function(){
//     console.log("chala");
// },400))



// throttling
// ......................
// window.addEventListener("mousemove",function(e){
//     console.log(e.clientX,e.clientY);
// })

// jese hum mouse move kr rh hai jb osse steps kaam kr skte hai


// function throttle(fn,delay){
//     let last=0;
//     return function(){
//         const now = Date.now();
//         if(now-last>=delay){
//             last=now;
//             fn();
//         }
//     };
// }

// window.addEventListener("mousemove",throttle(function(){
//     console.log("anubhav");
    
// },2000))




// json parse->  ke json se object banaante ho
// json stringify->ke through json bannate ho

// JSON.stringify({name:"Piyush",age:25})

// JSON.parse('{"name":"Piyush","age":25}')
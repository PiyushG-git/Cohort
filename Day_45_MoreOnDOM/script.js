// sync
// async
// javaScript is sync language by nature



// setTimeout
// setInterval



// setTimeout is use for delay (function,time)
// .............................................
// setInterval(function(){
//     console.log("Hello");
// },3000)

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// btn.addEventListener('click',function(){
//     h1.innerHTML="updating date...."
//     setTimeout(function(){
//         h1.innerHTML="hii i am piyush(updated)"
//     },2000)
// })




// setInterval -koi kisi interval ke baad change ho(controll loop),(after every interval it repeat)
// ........................................................
// setInterval(function(){
//     console.log("hello");
// },10000)

// var a=0;
// setInterval(function(){
//     a++
//     console.log(a);
// },1000)

// clearInterval-to stop the interval
// ..................................
// var a=0
// var int=setInterval(()=>{
//     a++
//     console.log(a);
// },1000)
// setTimeout(()=>{
//     clearInterval(int)
// },5000)





var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    
    var num = 50 + Math.floor(Math.random()*50)
    
    console.log('Your file will be downloaded in',num/10,'seconds');
    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num);
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);
})
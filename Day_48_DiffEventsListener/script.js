// document.getElementById('box')
var box=document.querySelector('#box');
// mouseleave,dlbclick,click,mouseenter,mousemove,wheel,keydown
// ................................................
// box.addEventListener('mouseenter',function(){
//     console.log("Event Performed");  
// })



// var img=document.querySelector('img');
// var msg=document.querySelector('h2 span');
// img.addEventListener('mouseenter',function(){
//     console.log('enter....');
//     msg.innerHTML='Chutkii se door ho jaaa'
// })
// img.addEventListener('mouseleave',function(){
//     console.log('left...');
//     msg.innerHTML='Good! ab door hi rahena'
// })




// cursor..........
// var main=document.querySelector('main');
// var cursor = document.querySelector('#cursor')
// main.addEventListener('mousemove',function(dets){
//     // console.log(dets.x);
//     cursor.style.left=dets.x+'px'
//     cursor.style.top=dets.y+'px'
// })




// var body=document.body;
// var body =document.querySelector('body')  //both are same
var body=document.body
var h1=document.querySelector('h1');
var aud=new Audio('./65.mp3')
body.addEventListener('keydown',function(dets){
    if(dets.code=='keyD'){
        aud.play();
    }
})









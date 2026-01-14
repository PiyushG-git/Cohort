

//create elements
// ..................
// var h1 = document.createElement('h1')
// console.log(h1);


// var btn=document.querySelector('button');
// btn.addEventListener('click',function(){
//     var h1 = document.createElement('h1')
//     h1.innerHTML='Hello';
//     console.log(h1);
// })



//appending a child
// ............................
// var h1 = document.createElement('h1')
// h1.innerHTML='Hello';
// var main=document.querySelector('main');
// main.appendChild(h1);




// sample1
// ............................
// var btn = document.querySelector('button');
// var main = document.querySelector('main');
// btn.addEventListener('click',function(){
//     var div=document.createElement('div');
//     var x=Math.random()*100
//     var y=Math.random()*100
//     var r=Math.random()*360
//     var c1=Math.floor(Math.random()*256);
//     var c2=Math.floor(Math.random()*256);
//     var c3=Math.floor(Math.random()*256);
//     div.style.height='50px'
//     div.style.width='50px'
//     div.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     div.style.position='absolute'
//     div.style.left=x+'%'
//     div.style.top=y+'%'
//     div.style.rotate=r+'deg'
//     main.appendChild(div)
// })






//sample2
// ......................
// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// var arr = ['Hey I am Sarthak','Sheyians i best','Harsh bhaiya is best','Piyush is handsome']

// btn.addEventListener('click',function(){
//     var h1=document.createElement('h1');
//     var i=Math.floor(Math.random()*arr.length)
//     var x=Math.random()*100
//     var y=Math.random()*100
//     var r=Math.random()*360
//     var s=Math.floor(Math.random()*2)
//     var c1=Math.floor(Math.random()*256);
//     var c2=Math.floor(Math.random()*256);
//     var c3=Math.floor(Math.random()*256);
//     h1.innerHTML=arr[i]
//     main.appendChild(h1)
//     h1.style.position='absolute'
//     h1.style.left=x+'%'
//     h1.style.top=y+'%'
//     h1.style.rotate=r+'deg'
//     h1.style.scale=s
//     h1.style.color=`rgb(${c1},${c2},${c3})`


// })
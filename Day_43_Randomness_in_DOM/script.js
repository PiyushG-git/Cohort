// MAth.random()
// var a=Math.floor(Math.random()*100);
// console.log(a);



// var btn = document.querySelector('button');
// var box = document.querySelector('#box');
// btn.addEventListener('click',function(){
//     var c1=Math.floor(Math.random()*256);
//     var c2=Math.floor(Math.random()*256);
//     var c3=Math.floor(Math.random()*256);
//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     box.innerHTML=`rgb(${c1},${c2},${c3})`
// })




// var arr=[23,56,33,22,66,33,5,3];
// console.log(arr.length);
// var i=Math.floor(Math.random()*arr.length);
// console.log(arr[i],i);




var arr=[
    {
        team:'CSK',
        primary:'Yellow',
        secondary:'blue'
    },
    {
        team:'rsb',
        primary:'red',
        secondary:'black'
    },
    {
        team:'mi',
        primary:'blue',
        secondary:'gold'
    }
]
// console.log(arr[0].team);
var h1= document.querySelector('h1');
var btn = document.querySelector('button');
btn.addEventListener('click',function(){
    var num=Math.floor(Math.random()*arr.length)
    h1.innerHTML=`${arr[num].team}`
    h1.style.backgroundColor=`${arr[num].primary}`
    h1.style.color=`${arr[num].secondary}`
})
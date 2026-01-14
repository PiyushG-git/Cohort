var h1=document.querySelector('h1');
h1.textContent='Change'
h1.innerHTML='<i>Change</i>'
h1.style.color='Pink'
h1.style.backgroundColor='green'


h1.addEventListener('click',function(){
    h1.style.color='Yellow';
    h1.innerHTML='I am Batman';
})

var box=document.getElementById('#box');
// document.getElementsByClassName is not use because it will give us htmlCollection[]


var Allh1=document.querySelectorAll('h1');
// console.log(Allh1);

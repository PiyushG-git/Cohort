

// querySelectorAll
// ........................
var allh1=document.querySelectorAll('h1');
// NodeList() []  ->list of multiply node (show like array) 




// allh1.forEach(function(elem){
//     console.log(elem.innerHTML);
// })
// foreach tohh lgaa skta hai but .map,.reduce nhi lgaa skte(NodelIst)




// .childNodes
// var allElem=document.querySelectorAll('.elm')
// allElem.forEach(function(elem){
//     console.log(elem.innerHTML);
//     // console.log(elem.childNodes);
//     // console.log(elem.childNodes[2]);
//     // console.log(elem.childNodes[3]);
// })




// Method-1
// .............
// var allElems=document.querySelectorAll('.elem');
// allElems.forEach(function(elem){
//     elem.childNodes[3].addEventListener('click',function(){
//         console.log("Add Friend");
        
//     })
// })




// Method-2
// ................
var allBtn=document.querySelectorAll('button');
allBtn.forEach(function(elem){
    elem.addEventListener('click',function(){
        // console.log('button clicked');
        if(elem.innerHTML=='Add Friend'){
            elem.innerHTML='Remove Friend'
        }
        else{
            elem.innerHTML='Add Friend'
        }
    })
})





// Event Bubling

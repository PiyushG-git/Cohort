// jb code chhota hota hai to fir aap kuch bhi kar skte ho bina koi guideline follow kiye and jb code bada ho jaata hai tab role mein aata hai guidelines

// ek kamra ek banda bana skta hai
// naksha nhi chahiye

// oops
// faila hua code (convert into)-> objects classes and functions

// code ko modular(file ko hiso me break krna),scalable,mangeable,easy to fix



// ...........................................
// -Intro to oops in js
// - understanding 'classes'and'object' in js
// -undersatnding 'Constructor'and 'Prototypes'-['this keyword','call','apply','bind']
// -More Topics in OOPS-['class expression','hoisting','inheritence','getter & setter']
//  ..........................................
// let obj=Object()



//Objects- ek bande ki details ek sath rakhne ke liye appke pass hai objects
let user1={
    name:'Piyush',
    email:'xyz@gmail.com'
}


// classes-blueprint(saacha)
// classes banaate hai taaki hame har baar ek naya object mil jaye
// classes object ki factory hai
// haar baar new word ke sath class run karoge to ek naya object milega

// construction-automtic chalne waala function jise hi class se naaya instance baanaya jaata hai
// remote1,remote2 is instance
class Remote{
    constructor(product,price,color){
        this.product=product;
        this.price=price;
        this.color=color;
    }
    powerOn(){
        console.log("the mahine is on now"); 
    }
    powerOff(){
        console.log("the mahine is off now"); 
    }
}
let Remote1=new Remote("Lenovo",1234,"grey");
let Remote2=new Remote("Daikin",2345,"white");
// Remote1.powerOn()


// Prototype-shared memory
Remote.prototype.findprice=function(){
    console.log("Price printed");
}
Remote1.findprice();




// this- ek speacial keyword hota hai
// .....................................
// global->this(window)
// console.log(this);

// function->this(window)
// function abcd(){
//         console.log(this);
//     }
// abcd();

// es5 function inside object->object
// let obj={
//     name:"Piyush",
//     func:function(){
//         console.log(this);
//     }
// };
// obj.func()

// es6 function inside object->window
// let obj={
//     name:"Piyush",
//     func:()=>{
//         console.log(this);
//     }
// };
// obj.func()

// es5 function(normal fumction) inside es5 function(normal fumction) inside object->window
// let obj={
//     name:"Piyush",
//     func:function(){
//         function abcd(){
//             console.log(this);
//         }
//         abcd()
//     }
// };
// obj.func()

// es6 function(arrow function) inside es5 function(normal fumction) inside object->object
// let obj={
//     name:"Piyush",
//     func:function(){
//         let abcd=()=>{
//             console.log(this);
//         }
//         abcd()
//     }
// };
// obj.func()





// call apply bind
// ....................
// ek function mein this ki value window hoti hai,agar aap chaate ho ki wo value window naa ho paar koi aur object ho tb aap use kr skte ho call apply bind ka

// let obj={
//     name:"Piyush",
// }
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj);



// function abcd(){
//     console.log(this,a,b,c);
// }
// abcd.apply(obj,[1,2,3]);



// function abcd(){
//     console.log(this,a,b,c);
// }
// let newfnc=abcd.bind(obj,[1,2,3]);
// newfnc()

// call->fnc chalata hai and this ki vlaue set karta hai
// aplly->wahi karta hai jo call karta hai and arguments a=mein pahli value this ki and doosi value arry hoti hai
// wahi karta hai jo call karta hai and appko naaya fnc deta hai
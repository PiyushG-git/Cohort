// -More Topics in OOPS-['class expression','hoisting','inheritence','getter & setter']



// classexpression
// .........................
// let Animal=class{
//     constructor(){
//         this.name="Dodo";
//         this.breed="dog";
//     }
// };
// let an1=new Animal();
// ab hoisting possible nhi hai



// inheritence->agar koi class hai jismein kuch kuch likha hai aap maante ho ek nayi class usi ka extensiion hai tohh aap wo saare features puraaani class se borrow kar skte ho and nayi class mein use kar skte ho and apne naye features bhi bana sakte hai

//....................
// class Animal{
//     constructor(){
//         this.hands=2;
//         this.legs=2;
//     }
//     eat(){}
//     breathe(){}
// }
// class kekda extends Animal{
//     constructor(){
//         super();
//         this.legs=8;
//         this.hands=0;
//     }
//     susu(){}
// }
// let kekda1=new kekda();



// getter & setter
// ............................................
// class Animal{
//     constructor(){
//         this._age=12;
//     }
//     set aage(val){
//         if(val<0){
//             console.error("not");
//             return
//         }
//         this._age=val
//         return this._age
//     }
//     get aage(){
//         return this._age
//     }
// }
// // // (_age)"_" lgaane se private nhi bnata likin notation krne ke liye krte hai ki yehh private variable hai 

// let a1=new Animal();
// console.log(a1.aage=37);






// SECTION 1: Objects and OOPS Thinking (Foundation)

// 	1.	Create a user object that stores name and email and has a login method which prints “User logged in”.

// 	2.	Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes cleaner. Write code for both approaches.

// 	3.	Create a product object that stores name and price and has a method which returns the final price after discount.

// The goal of this section is to understand why keeping data and behavior together makes code easier to manage.

// let user1={
//     name:"Piyush",
//     login:function(){
//         console.log("Loggin");
//     },
// };
// let user2={
//     name:"Piyush",
//     login:function(){
//         console.log("Loggin");
//     },
// };
// let user3={
//     name:"Piyush",
//     login:function(){
//         console.log("Loggin");
//     },
// };
// let user4={
//     name:"Piyush",
//     login:function(){
//         console.log("Loggin");
//     },
// };
// let user5={
//     name:"Piyush",
//     login:function(){
//         console.log("Loggin");
//     },
// };
// user1.login();


// class User{
//     constructor(name,email){
//         this.name=name;
//         this.email=email;
//     }
//     login(){
//             console.log("loogin");
//         }
// }
// let user1= new User("Piyush","piyush@gmail.com");
// let user2=new User("Harsh","xyz.g");




// let product={
//     name:"cap",
//     price:3300,
//     discountedPrice:function(){
//         return this.price-200;
//     },
// };
// console.log(product.discountedPrice());







// SECTION 2: Classes and Objects
// 	4.	Create a Car class with the following:
// brand
// speed
// a drive method that prints the car brand and speed
// 	5.	Create two different car objects from the same class and verify that their data is different.
// 	6.	Answer this in your own words:
// If classes did not exist, how would you write this logic and what problems might occur when the project becomes large?




// class Car{
//     constructor(brand,speed){
//         this.brand=brand;
//         this.speed=speed;
//     }
//     drive(){
//         // console.log(this.brand+"__"+this.speed);
//         return this.brand+"__"+this.speed;
//     }
// }
// let car1=new Car("Hyundai",180);
// let car2=new Car("Maruti",170);







// SECTION 3: Constructor and this keyword
// 	7.	Create a Student class whose constructor accepts name and roll number.
// Add a method introduce that prints both values.
// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
// 	9.	Create an object with two methods:
// One method using a normal function
// One method using an arrow function

// Inside both, print this and observe the difference.

// The goal is to clearly understand how this works and when it changes.





// class Student{
//     constructor(name,rollnumber){
//         this.name=name;
//         this.rollnumber=rollnumber;
//     }
//     introduce(){
//         return this.name+"_"+this.rollnumber;
//     }
// };
// let st1=new Student("Piyush",21);


// let obj={
//     sayName:function(){
//         console.log(this);
//     },
//     sayArrowName:()=>{
//         console.log(this);
//     }
// }
// obj.sayName();
// obj.sayArrowName();







// SECTION 4: Constructor Functions and Prototypes
// 	10.	Create a User constructor function (do not use class syntax).
// 	11.	Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype
// 	12.	Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

// The purpose here is to understand how prototypes help share behavior efficiently.



// bina class ke bhi construtor func banta hai
// es6 se pahle construcor func aise bnte tha
// function User(val){
//     this.name=val;
// }
// User.prototype.loggedin=function(){
//     console.log("loggedin");
// };
// let user1=new User("Piyush");
// let user2=new User("Harsh");
// console.log(user1.loggedin()===user2.loggedin());  //true


// function User(val){
//     this.name=val;
//     this.loggedin=function(){
//     console.log("loggedin");
// };
// }
// let user1=new User("Piyush");
// let user2=new User("Harsh");
// console.log(user1.loggedin()===user2.loggedin());





// SECTION 5: call, apply, bind
// 	13.	Create a function that prints this.name.
// 	14.	Create an object that contains a name property.

// Use call to run the function using the object
// Use apply to run the function using the object
// Use bind to create a new function and then call it
// 	15.	Borrow a method from one object and run it for another object using call.

// The goal is to understand how this can be manually controlled.
// function abcd(a,b,c,d,e){
//     console.log(this.name,a,b,c);
// }
// let obj={
//     name:"Piyush"
// }
// abcd.call(obj)
// abcd.apply(obj,[1,2,3,4,5]);
// let func=abcd.bind(obj);
// func()
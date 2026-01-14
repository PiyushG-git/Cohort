// 


// to clear the localstorage
// ........................
// localStorage.clear()


// to storage the vlaue and it will store in the key,value pair(to add new or overwrite exiting ones)
// localStorage.setItem('user','Piyush');

// to  get the data
// var a = localStorage.getItem('user');
// console.log(a);


// to clear a specific data
// localStorage.removeItem('user');




// drawback
// localStorage string me save krta hai sb
// or jb obj save krte hai tohh vo save nhi krta tohh osse phele obj se string convert krte hai using stringify



// var obj={
//     user:'Piyush',
//     age:21,
//     city:'Bhopal'
// }

// var newobj=JSON.stringify(obj);
// convert the obj into string
// localStorage.setItem('obj',newobj);



// const obj=localStorage.getItem('obj');

// var realObj = JSON.parse(obj);
// convert the string intto object




// JSON.stringify(obj) : Array/Object -> string
// JSON.parse(obj) : String -> Array/Object



// sesessionStorage
// ...................
// sessionStorage.setItem('user','Sarthak')
//
// form handling
// ........................

// import React from 'react'

// const App = () => {
//   const submitHandler=(e)=>{
//     e.preventDefault();
//     console.log("Form Submit");
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//           submitHandler(e);
//         }}>
//         <input type="text" placeholder='Enter the name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }
// export default App





// ..........................
// two-way binding
// ........................

// import React from "react";

// const App = () => {
//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form Submit");
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input type="text" placeholder="Enter the name" onChange={(e)=>{
//           console.log(e.target.value);
//         }}/>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };
// export default App;





// in this user is not direct interacting with the dom

// import React, { useState } from "react";

// const App = () => {

//   const [username, setUsername] = useState("");

//   const [allUsers,setAllUsers] = useState([])

//   const submitHandler = (e) => {
//     e.preventDefault();
//     // console.log(username);

//     // const newAllUsers=[...allUsers] //method 1
//     // newAllUsers.push(username)
//     // setAllUsers(newAllUsers)
//     // console.log(newAllUsers);

//     setAllUsers([...allUsers,username]); //Method2
//     setUsername('');
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Enter the name"
//           value={username}
//           required
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         />
//         <button>Submit</button>
//       </form>
//       {allUsers.map(function(e,idx){
//         return <h1 key={idx}>{e}</h1>
//       })}
//     </div>
//   );
// };

// export default App;





// praticing
// import React, { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNo, setPhoneNo] = useState("");
//   const [details, setDetails] = useState([]);
//   const submitHandler = (e) => {
//     e.preventDefault();
//     // console.log("submit");
//     setName("");
//     setEmail("");
//     setPhoneNo("");
//     setDetails([...details, { name, email, phoneNo }]);
//     console.log(details);
//   };
//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//       >
//         <input
//           type="text"
//           placeholder="Enter Name"
//           required
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Enter Email"
//           required
//           value={email}
//           onChange={(e) => {
//             setEmail(e.target.value);
//           }}
//         />
//         <input
//           type="text"
//           placeholder="Enter PhoneNumber"
//           required
//           value={phoneNo}
//           onChange={(e) => {
//             setPhoneNo(e.target.value);
//           }}
//         />
//         <button>Submit</button>
//       </form>
//       {details.map(function (e, idx) {
//         // console.log(e );
//         return (
//           <div key={idx}>
//             <span>{e.name}</span>
//             <span>{e.email}</span>
//             <span>{e.phoneNo}</span>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

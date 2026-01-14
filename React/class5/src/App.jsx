// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [num,setNum] = useState(0);
  
  
//   // let a=10;
//   // const btnclicked=()=>{
//   //   a++;   //yeh ui me nhi dikhega kyuki yeh direct dom se interact kr rha hai but ui me tohh react hai
//   //   console.log("btn click");
//   // }
  
  

//   return (
//     <div>
//       {/* <h1>{a}</h1> */}
//       <h1>{num}</h1>
//       <button onClick={function(){
//         setNum(num+10)
//       }}>Increase</button>
//       <button onClick={function(){
//         setNum(num-10)
//       }}>Decrease</button>
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   // const marks=[45,52,99,44,28];
//   const [marks,setMarks] = useState([45,52,99,44,28]);
//   function graceStudent(){
//     const newMarks=marks.map(function(elem){
//       return elem+5;
//     })
//     setMarks(newMarks)
//   }
//   return (
//     <div>
//       {marks.map(function(elem,idx){
//         return <h1 key={idx}>Student {idx+1} = {elem} ({elem>33?"Pass":"Fail"})</h1>
//       })}
//       <button onClick={graceStudent}>Give them Gracs</button>
//     </div>
//   )
// }

// export default App





// import React from 'react'
// import { useState } from 'react'
// import Men from './components/Men';
// import Women from './components/Women';


// const App = () => {
//   const [gender,setGender] = useState('MAle');
//   function ChangeGender(){
//     if(gender=='Male'){
//       setGender('Female')
//     }
//     else{
//       setGender('Male')
//     }
//   }
//   return (
//     <div>
//       <h1>{gender}</h1>
//       <button onClick={ChangeGender}>Change Gender</button>
//       {gender=='Male'?<Men/>:<Women/>}
//     </div>
//   )
// }

// export default App


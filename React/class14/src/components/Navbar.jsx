// import React from 'react'

// const Navbar = (props) => {
//   return (
//     <div>
//       <div className='h-10 w-full bg-emerald-400'>This is Navbar</div>
//       {props.children}
//     </div>
//   )
// }

// export default Navbar

import React, { useContext } from 'react'
import { PostDataContext } from '../context/PostContext';

const Navbar = () => {
  const data = useContext(PostDataContext);
  console.log(data);
  
  return (
    <div>
      <div className='h-10 w-full bg-emerald-400'>This is Navbar</div>
    </div>
  )
}

export default Navbar

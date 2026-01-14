import React from 'react'

const Navbar = (props) => {
    console.log(props);
  return (
    <div style={{backgroundColor:props.color}} className='flex items-center justify-between mb-1 text-white px-8 py-3'>
      {props.title}
      <div className='flex gap-10'>
        {/* <h4 className='text-xl text-white'>Home</h4>
        <h4 className='text-xl text-white'>Home</h4>
        <h4 className='text-xl text-white'>Home</h4>
        <h4 className='text-xl text-white'>Home</h4> */}
        {props.links.map(function(elem,idx){
            return <h4 className='text-xl text-white' key={idx}>{elem}</h4>
        })}
      </div>
    </div>
  )
}

export default Navbar

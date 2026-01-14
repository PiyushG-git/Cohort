import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-emerald-400 w-fit px-5 py-2 font-semibold text-2xl rounded text-white flex justify-center items-center'>
      {props.text}
    </div>
  )
}

export default Button
Button
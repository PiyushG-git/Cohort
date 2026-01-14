import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [counter,setCounter] = useState(0)
  const [title,setTitle] = useState('');

  // useEffect(function(){
  //   console.log("useEffect is running");
  // })
  // useEffect(function(){
  //   console.log("useEffect due to counter");
  // },[counter])
  useEffect(function(){
    console.log("useEffect due to counter");
  },[title,counter])
  return (
    <div>
      <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='enter name' />
      <br />
      <h1>{counter}</h1>
      <button onClick={()=>{
        setCounter(counter+1)
      }}>Increase</button>
    </div>
  )
}

export default App

// React - ka main kaam UI banana
// App Calling , Asyn Procees are side stack process
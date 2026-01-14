import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme,setTheme] = useState('red');
  function curTheme(newTheme){
    setTheme(newTheme)
  }
  return (
    <div>
      <h1>The theme is {theme}</h1>
      <Navbar curTheme={curTheme}/>
    </div>
  )
}

export default App

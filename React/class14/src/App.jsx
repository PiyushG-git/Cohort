import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sections from './components/Sections'

const App = () => {
  return (
    <div>
      <Navbar/>

      {/* ........ */}
      {/* <Navbar>
        <h1>Hello</h1>   
      </Navbar> */}
      {/* this <h1>Hello</h1>  will pass as a children and we can see in props.children*/}
      {/* ........ */}

      <Sections/>
      <Footer/>
    </div>
  )
}

export default App

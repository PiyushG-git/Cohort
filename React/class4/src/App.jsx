import React from 'react'
import Navbar from './components/Navbar'
import Men from './components/Men'
import Women from './components/Women'
import Function from './components/Function'

const App = () => {
  const User1={
    name:'sarthak',
    age:21,
    gender:'male',
  }
  const User2={
    name:'Shreya',
    age:23,
    gender:'female',
  }


  return (
    <div>
      {/* <Navbar title='Sheryians' color='red' links={['Home','About','Contact','Account']}/>
      <Navbar title='Sheryians' color='green' links={['Home','About','Contact','Account']}/>
      {User1.gender=='male'?<Men/>:<Women/>} */}


      <Function/>
    </div>
  )
}

export default App

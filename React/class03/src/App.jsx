
// Day 71_More in React
// ...........................

import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {

  // vese tohh yehh app.jx me nhi kre tohh better hai but card.jsx bhara hoa hai isliye yhha kr rha hu
  const users=['Anubhav','Bixi','Chandu','Dev'];
  return (
    <div>
      {/* <Card/> */}
      {/* <Card/> */}
      {/* {Card()} */}
      {/* they both are same & we can also sent multiple things */}
      {/* {Card(20,30)} */}

      <div className='p-3 h-screen bg-black'>
        {/* {Card('Piyush',21)};
        {Card('Sarthak',29)}; */}
        <Card user='Piyush' age={21}/>
        <Card user='Piyush' age={29}/>
        {/* <Button text='Explore'/> */}

        {users.map(function(elem){
          return <Button text={elem}/>
        })}
      </div>
    </div>
  )
}

export default App

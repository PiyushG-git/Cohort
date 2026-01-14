import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import User from './components/User';

const App = () => {

  const [allData,setAllData] = useState([]);

  async function getData(){
    // Method 1
    // const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    // console.log(response.data);

    //Method 2 (using destructing)
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data);
    setAllData(data)    

  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div className='all-cards'>
        {allData.map(function (elem, idx) {
          return <div key={idx}>
            <User elem={elem} />
          </div>
        })}
      </div>
    </div>
  )
}

export default App
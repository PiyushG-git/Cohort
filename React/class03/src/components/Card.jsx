import React from 'react'

const Card = (props) => {
    // var age=21;
    // var arr=[10,20,30,50];
    // const arr=['Anubhav','Bixi','Chandu','Dev'];
    console.log(props);
    
  return (
    <div>
      {/* This is Card{age} */}


      {/* {arr.map(function(){
        return "hello"
      })} */}


      {/* {
        arr.filter(function(elem){
          return elem<30;
        })
      } */}


      {/* {arr.map(function(elem){
        return <h1>{elem} is king</h1>
      })} */}


      {/* This is Card of{a+b}; */}


      <div className='bg-white border-2 border-red-500 m-2 rounded px-5 py-3 w-fit'>
        <h1 className='text-2xl font-semibold'>
          {props.user},{props.age}
        </h1>
      </div>
    </div>
  )
}

export default Card

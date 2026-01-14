import React from 'react'

const Function = () => {
    // function btnClicked(){
    //     console.log("Button is Clicked!!");
    // }
    // onClick={btnClicked} 
    function btnClicked(a){
        console.log("Button is Clicked!!",a);
    }
  return (
    <div >
        <button onClick={function(){
            btnClicked(10)
        }} className='active:scale-95 bg-emerald-400 w-fit px-5 py-2 font-semibold text-2xl rounded text-white flex justify-center items-center'>
      Click to Download</button>
    </div>
  )
}

export default Function

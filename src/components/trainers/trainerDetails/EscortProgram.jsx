import React from 'react'

const EscortProgram = ({setShowEscortDetails}) => {
  return (
        <div 
        className="flex flex-wrap justify-center items-center my-[10vh] h-fit w-2/3 relative">
          <button 
            onClick={()=>setShowEscortDetails(null)}
            className=' absolute right-0 top-0 text-white'>back</button>

          <div 
            className="w-[30vw] h-[60vh] text-white
            flex justify-center items-center
            border rounded-md "
            >escort details</div>

          <div
            className="w-full text-white"
            >
            <p>Time:</p>
            <p>Price:</p>
            <p>Discount:</p>
            <p>Total</p>
            <button 
              className=' bg-blue-600 hover:bg-blue-400 p-2 rounded-md'
              >Buy Now</button>
          </div>

        </div>
  )
}

export default EscortProgram
import React from 'react'

const LineSkeleton = ({height,width,rounded}) => {
  return (
    <div role="status" style={{height:height,width:width}} className="max-w-sm animate-pulse">
        <div style={{borderRadius:`${rounded?rounded:'0px'}`}} className= "h-full bg-gray-200  w-full mb-4"></div>
    </div>
  )
}

export default LineSkeleton
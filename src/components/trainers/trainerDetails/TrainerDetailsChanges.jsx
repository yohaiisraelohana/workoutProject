import React from 'react'

//components import
import Change from '../../changes/Change'
const TrainerDetailsChanges = () => {
  return (
    <div className='h-fit py-[10vh] lg:flex flex-wrap justify-center'>
        <div 
            className="mb-[20vh] lg:w-[50vw]"
            ><Change style={"h-[50vh] md:h-[60vh] w-full md:w-full  mb-12"} title={"trainer change"}/>
        </div>
        <div className="w-full text-center text-3xl text-white">Trainees Results</div>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 h-screen  w-[90vw] mt-[10vh] overflow-y-auto">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((n)=>(
          <div className="w-full mb-[10vh]" key={n}>
            <Change style={"h-[50vh] w-full md:w-full  mb-12"} title={"title"+n}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrainerDetailsChanges
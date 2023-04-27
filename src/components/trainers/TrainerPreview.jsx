import React from 'react'

import TrainerCard from './TrainerCard'

const AuthorsPreview = () => {
  return (
    <div className='authors_preview w-screen grid grid-cols-1 justify-center py-8 bg-black bg-opacity-80'>
        <p className='text-3xl text-center text-white'>Trainers</p>
        <div className="flex justify-center mb-6">
          <p className='text-white text-center w-[80vw] sm:w-[60vw] lg:w-[40vw] '>Most Experiences trainers you can find with a diffrent kind of training and all the informations about them.</p>
        </div>
        <div className="flex w-5/6 m-auto overflow-auto ">
          <div className="flex gap-8 min:w-[40vw] hover:my-[2vh]">
            {new Array(6).fill(0).map((n,i) => (
              <TrainerCard key={i} style={"max-md:hover:shadow-xl max-md:hover:shadow-blue-500 hover:-mt-[2vh] flex flex-shrink-0 justify-center w-[60vw]  md:w-[40vw] h-[50vh] overflow-auto  rounded-lg bg-white shadow-lg"} />
            ))}
          </div>
        </div>
    </div>
  )
}

export default AuthorsPreview
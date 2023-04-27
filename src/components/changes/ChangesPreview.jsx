import React from 'react'

import Change from './Change';

const ChangesPreview = () => {
    
  return (
    <div className='w-screen flex justify-center h-screen items-center bg-black bg-opacity-80'>
        <div className="w-5/6 flex max-md:flex-wrap gap-4 md:gap-12 max-md:content-center md:items-center justify-between h-[90vh] ">
          <article className='text-white w-full h-fit max-md:-mb-[5vh]'>
            <p className='text-3xl max-md:text-center'>Best Changes</p>
            <p className='max-md:text-center' >The best chamges of trainees will apload here every week by most weight loss and comments sweep right to see more </p>
          </article>
          <div className="flex overflow-x-auto max-md:gap-16 gap-4  max-sm:h-[65vh] max-md:h-[75vh] h-[90vh]">
            {new Array(10).fill(0).map((n,i)=>(
              <Change key={i} style={"max-md:w-[80vw] max-md:h-[55vh] h-[50vh] w-[40vw] m-auto flex-shrink-0"}/>
            ))}
          </div>
        </div>
    </div>
  )
}

export default ChangesPreview
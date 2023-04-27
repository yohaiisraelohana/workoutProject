import React from 'react'

const TrainerDetailsGallery = () => {
  return (
    <div 
        className='h-screen w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  justify-center overflow-y-auto'
        >{[1,2,3,4,5,6,7,8,9,10,11,12,13,14].map((n)=>(
            <div key={n}
              className="h-[25vh] md:h-[30vh] lg:h-[35vh] xl:h-[40vh] w-full border"></div>
        ))}
    </div>
  )
}

export default TrainerDetailsGallery
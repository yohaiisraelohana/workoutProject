import React from 'react'

const RecipesPreview = () => {
  return (
    <div className='w-screen h-fit flex flex-col items-center justify-center bg-black bg-opacity-80 py-[10vh]'>
        <p className='text-3xl text-white max-md:text-center '>Recipes</p>
        <p className='text-center text-white max-sm:pb-8 pb-12'>Variety of diet and healthy recipes</p>
        <div className="w-[95vw] lg:w-5/6 grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-y-4 md:gap-y-16">
            {[1,2,3,4,5,6].map((e,i)=>(
                <div key={e} className={`flex max-md:${i > 3 && "hidden"} justify-center flex-col items-center hover:-mt-2`}>
                    <div className="w-[30vw] h-[30vw] md:w-[20vw] md:h-[20vw] border bg-white rounded-sm hover:shadow-lg hover:shadow-white"></div>
                    <p className='py-2 w-[30vw] md:w-[10vw] text-center text-white'>recipe title will be here</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecipesPreview
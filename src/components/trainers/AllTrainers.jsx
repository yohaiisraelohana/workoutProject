import React from 'react'

import TrainerCard from './TrainerCard';

const AllTrainers = () => {
  return (
    <div className=" w-screen h-screen overflow-y-auto bg-allTrainers bg-cover bg-no-repeat ">
    <div className='w-screen flex justify-center bg-black bg-opacity-60'>
        <div className="w-[97vw] sm:w-11/12 grid grid-cols-3 mt-[15vh] gap-4">
            <div className="mt-[15vh]">
                <p className='text-center text-white text-2xl sm:text-3xl my-2 sm:my-4' >PowerLifting</p>
                    {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                        <div key={n} className="py-4">
                            <TrainerCard style={"max-md:hover:shadow-lg max-md:hover:shadow-blue-500 h-[30vh] w-full flex flex-shrink-0 justify-center  overflow-auto  rounded-lg bg-white "}/>
                        </div>
                    ))}
            </div>
            <div className="">
                <p className='text-center text-white text-2xl sm:text-3xl my-2 sm:my-4' >BodyBilding</p>
                    {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                        <div key={n} className="py-4  ">
                            <TrainerCard style={"max-md:hover:shadow-lg max-md:hover:shadow-blue-500 h-[30vh] w-full flex flex-shrink-0 justify-center  overflow-auto  rounded-lg bg-white "} />
                        </div>
                    ))}
            </div>
            <div className="mt-[15vh]">
                <p className='text-center text-white text-2xl sm:text-3xl my-2 sm:my-4' >Nutritionist</p>
                    {[1,2,3,4,5,6,7,8,9,10].map((n)=>(
                        <div key={n} className="py-4">
                            <TrainerCard style={"max-md:hover:shadow-lg max-md:hover:shadow-blue-500 h-[30vh] w-full flex flex-shrink-0 justify-center  overflow-auto  rounded-lg bg-white "}/>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    </div>
  )
}

export default AllTrainers
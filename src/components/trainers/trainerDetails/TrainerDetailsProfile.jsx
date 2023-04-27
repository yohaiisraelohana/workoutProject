import React from 'react'
import {AiOutlineShareAlt,AiOutlineMessage,AiOutlineInstagram,AiOutlineFacebook,AiOutlineWhatsApp} from 'react-icons/ai';

const TrainerDetailsProfile = () => {
  return (
    <div className="trainer_details w-5/6 flex flex-col justify-center items-center py-[5vh]">
    <div className="h-[25vh] w-[25vh] border border-blue-500 rounded-full flex items-center justify-center">profile img</div>
    <div className="flex items-center my-1">
      <p className='text-white text-3xl mx-1'>{"Trainer Name"}</p>
      <AiOutlineMessage  className='text-white text-3xl mx-1'/>
      <AiOutlineShareAlt className='text-white text-3xl mx-1'/>
    </div>
    <div className="flex flex-wrap text-white justify-center w-[90vw] md:w-4/6 my-8">
      <div className="w-full flex max-md:flex-wrap max-md:text-center justify-center items-center">
        <p className='text-lg mr-4'>Bio:</p>
        <p className=' text-gray-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo id dolor deleniti doloribus eos a sapiente esse labore tempora dignissimos, error unde magni sint totam magnam odio assumenda ullam. Id?</p>
      </div>

      <div className="w-full flex justify-center items-center max-md:flex-wrap max-md:text-center">
        <p className='text-lg mr-4'>Expertise:</p>
        <p className=' text-gray-300'>{"Bodybilding ,Nutrition"}</p>
      </div>

      <div className="w-full flex justify-center items-center max-md:flex-wrap max-md:text-center">
        <p className='text-lg mr-4'>Experience:</p>
        <p className=' text-gray-300'>{1} years of training</p>
      </div>

      <div className="w-full flex justify-center items-center max-md:flex-wrap max-md:text-center">
        <p className='text-lg mr-4'>Trainees:</p>
        <p className=' text-gray-300'>{1}</p>
      </div>

      <div className="w-full flex justify-center items-center max-md:flex-wrap max-md:text-center">
        <p className='text-lg mr-4'>Comments:</p>
        <p className=' text-gray-300'>{2}</p>
      </div>

      <div className="w-full flex justify-center items-center ">
        <p className='text-lg mr-4'>Rate:</p>
        <p className=' text-gray-300'>0</p>
      </div>

      <div className="w-full flex justify-center items-center ">
        <AiOutlineInstagram className=' text-2xl mx-1 text-red-500'/>
        <AiOutlineFacebook  className='text-2xl mx-1 text-blue-400'/>
        <AiOutlineWhatsApp  className=' text-2xl mx-1 text-green-400'/>
      </div>
  
    </div>
  </div>
  )
}

export default TrainerDetailsProfile
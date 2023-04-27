import React from 'react'


const Banner = () => {
    
  return (
    <div 
      className="bg-transparent pt-14 w-screen flex flex-wrap justify-center">
      <div 
        className="pt-5 w-[90%] md:w-5/6 flex justify-between md:mt-56 ">

        <div className="border mt-[10vh] sm:mt-[20vh] md:mt-32 mb-9 w-[55vw] xs:w-[45vw] sm:w-[35vw] md:w-fit h-fit py-5  px-4 md:pr-8 bg-black bg-opacity-80 shadow-white shadow text-center md:text-start">
          <p className='text-3xl  my-4 text-white  rounded-md text-center  w-full'>GymTeemLab Features</p>
          <p className="my-2 text-lg text-zinc-300">Build your own training programs</p>
          <p className="my-2 text-lg text-zinc-300">Folloe Your progress to goal</p>
          <p className="my-2 text-lg text-zinc-300">Grow your fitness knowlage with <br className='hidden md:inline'/> rich articles</p>
          <p className="my-2 text-lg text-zinc-300">Choose your most fitting trainer</p>
          <p className="my-2 text-lg text-zinc-300">Calculate your daily meals</p>
          <p className="my-2 text-lg text-zinc-300">Chat with your trainer</p>
          <p className="my-2 text-lg text-zinc-300">Manage your trainees</p>
        </div>
        <div className=" hidden md:block border h-fit w-full mt-[90vh] md:mt-96 md:w-2/5 p-4 mb-9 bg-black bg-opacity-80 shadow-white shadow">
            <p className='text-xl text-white text-whit rounded-md text-center w-full pb-2'>join to more then 1000 beasts</p>
            <p className=' text-zinc-300'>GymTeemLab gives you the best way to rich your goals and folow your process with the best personal trainers, articles, and more then 1000 exercises</p>
        </div>
      </div> 
        <div className=" border h-fit w-[80%] md:hidden  md:mt-96 md:w-2/5 p-4 mb-9 bg-black bg-opacity-80 shadow-white shadow">
            <p className='text-xl text-white text-whit rounded-md text-center w-full pb-2'>join to more then 1000 beasts</p>
            <p className=' text-zinc-300 text-center'>GymTeemLab gives you the best way to rich your goals and folow your process with the best personal trainers, articles, and more then 1000 exercises</p>
        </div>
        <div className="w-screen border"></div>
  </div>
  )
}

export default Banner

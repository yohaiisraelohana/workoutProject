import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import {GiMeal} from 'react-icons/gi'
import {AiOutlineArrowRight} from 'react-icons/ai'

const Recipe = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const rate = 3;
  return (
    <div 
        className='h-screen overflow-y-auto w-screen flex justify-center '
        >
        <div className="pt-[10vh] h-fit bg-black bg-opacity-90 content-start w-screen flex flex-wrap justify-center text-white">
          <button 
              onClick={()=> navigate(-1)}
              className='text-white absolute top-[10vh] right-[6vw] md:right-[10vw] text-xl'
              ><AiOutlineArrowRight/></button>
          <img src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg" 
            className='w-[90vw] md:w-[80vw] my-8 border-2'
            alt="" />
          <p className='w-[90vw] text-start border-b h-fit text-2xl mt-[5vh]'>Rate</p>
          <div className="flex justify-between w-[90vw] px-4 py-2 text-lg">
            <p>{"1300"} reviewrs</p>
            <div className="flex items-center">
              {new Array(rate).fill(0).map((n,i) => (
                <GiMeal key={i} className='text-blue-500 mx-1' />
              ))}
              {new Array(5-rate).fill(0).map((n,i) => (
                <GiMeal key={i} className='text-white opacity-60 mx-1' />
              ))}
            </div>
          </div>
          <p className='w-[90vw] text-start border-b h-fit text-2xl mt-[5vh]'>Ingredients</p>
          <div className="flex flex-wrap justify-between w-[90vw] py-2 text-lg">
            {[1,2,3,4,5,6].map((n,i) => (<div key={i}
              className="w-full md:w-1/2 flex justify-between px-4">
              <p>{"name"} :</p>
              <p>{"amount"}</p>
            </div>))}
          </div>
          <p className='w-[90vw] text-start border-b h-fit text-2xl mt-[5vh]'>Preparation</p>
          <div className="w-[90vw] px-4 py-2">
            {["step 1","step 2", "step 3","step 4","step 5"].map((s,i) => (
              <p>{i+1}. {s}</p>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Recipe
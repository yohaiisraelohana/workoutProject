//react imports
import React,{useContext} from 'react'

//components imports
import Change from './Change'

//context
import { ChangeContext } from '../../contexts/ChangeContext'

//assets imports
  //icons
  import {AiOutlineNumber} from 'react-icons/ai'
  import {RiNumber1,RiNumber2,RiNumber3} from 'react-icons/ri'


const AllChanges = () => {

  const change = useContext(ChangeContext);
  return (
    <div className=" w-screen h-screen overflow-y-auto bg-allChanges bg-cover bg-no-repeat">
    <div className='w-screen pt-14 pb-4 h-fit flex flex-wrap justify-center bg-black bg-opacity-60'>
      <div className="best_3 h-[80vh] flex max-md:h-fit  items-end justify-center  w-[90vw] mt-[10vh] md:mt-[17vh]">

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5 items-end  w-full">
            <div className="w-full">
              <Change style={"w-full h-[50vh]"} kg={change.kg} cir={change.cir}/>
              <div className="state border h-[15vh] w-full max-md:my-[3vh] md:mt-[5vh] flex  justify-center items-center">
                <div className="flex flex-wrap justify-center">
                  <AiOutlineNumber className='text-blue-500 text-3xl'/>
                  <RiNumber2 className='text-white text-3xl'/>
                  <p className='text-white text-3xl w-full text-center'>{"change title"}</p>
                </div>
              </div>
            </div>
            <div className="w-full max-md:order-first">
              <Change style={"w-full h-[50vh]"} kg={change.kg} cir={change.cir}/>
              <div className="state border h-[25vh] w-full max-md:my-[3vh] md:mt-[5vh] flex  justify-center items-center">
                <div className="flex flex-wrap justify-center">
                  <AiOutlineNumber className='text-blue-500 text-3xl'/>
                  <RiNumber1 className='text-white text-3xl'/>
                  <p className='text-white text-3xl w-full text-center'>{"change title"}</p>
                </div>
              </div>
            </div>
            <div className="w-full">
              <Change style={"w-full h-[50vh]"} kg={change.kg} cir={change.cir}/>
              <div className="state border h-[10vh] w-full max-md:my-[3vh] md:mt-[5vh] flex  justify-center items-center">
                <div className="flex flex-wrap justify-center">
                  <AiOutlineNumber className='text-blue-500 text-3xl'/>
                  <RiNumber3 className='text-white text-3xl'/>
                  <p className='text-white text-3xl w-full text-center'>{"change title"}</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="grid grid-cols-3 max-sm:grid-cols-1  max-md:grid-cols-2 gap-5 h-screen  w-[90vw] mt-[10vh] overflow-y-auto">
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((n)=>(
          <div className="w-full " key={n}>
            <Change style={"w-full h-[50vh] mb-[8vh]"} title={"title"+n} kg={change.kg} cir={change.cir}/>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AllChanges
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TrainerProfile from '../../assets/trainerProfile.jpeg'

const TrainerCard = ({width,height,style}) => {
  const navigate = useNavigate()
  return (
        <div className={style ? style : `flex flex-shrink-0 justify-center w-[${width ? width : "100%"}]  h-[${height ? height : "100%"}] overflow-auto  rounded-lg bg-white shadow-lg`}>
          <div
            className={`flex flex-col h-full w-full relative  md:max-w-xl md:flex-row`}>
            
            <img
              onClick={()=>navigate(`/trainer/1`)}
              className={`h-full w-full rounded-t-lg object-cover  md:w-48 md:rounded-none md:rounded-l-lg`}
              src={TrainerProfile}
              alt="" />
            <div className="flex flex-col justify-start p-6">
              <h5
                className="mb-2 text-xl font-medium text-neutral-800 ">
                Author Name
              </h5>
              <div className=" overflow-auto">
              <div className="flex justify-between">
                <div className="text-neutral-600">Rate:</div>
                <div className="text-neutral-600">4/5</div>
              </div>
              <div className="flex justify-between">
                <div className="text-neutral-600">Trainees:</div>
                <div className="text-neutral-600">230</div>
              </div>
              <div className="flex justify-between">
                <div className="text-neutral-600">expertise:</div>
                <div className="text-neutral-600">fit and strengh</div>
              </div>
              <p className='pt-1 overflow-auto'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem reprehenderit a reiciendis 
              </p>
              <p className="text-xs text-neutral-500 ">
                3 years experience
              </p>
              </div>
              <Link to={`/trainer/1`} className=' absolute max-md:hidden bottom-5 right-7 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-300'>Details</Link>
            </div>
          </div>
        </div>
  )
}

export default TrainerCard
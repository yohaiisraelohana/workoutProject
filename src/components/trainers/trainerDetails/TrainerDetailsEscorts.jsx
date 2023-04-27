//react imports
import React,{useState} from 'react'

//components imports
import EscortProgram from './EscortProgram';

const TrainerDetailsEscorts = () => {
  const [show_escort_details,setShowEscortDetails] = useState(null);
  return (
    <div className='h-fit w-full flex justify-center  overflow-y-auto'>
        { show_escort_details ? 
        <EscortProgram setShowEscortDetails={setShowEscortDetails}/>
        :
        <div className="grid grid-cols-1 max-md:gap-12 gap-4 md:grid-cols-3 w-[80%] md:w-full content-start justify-center py-[5vh] ">
            {[1,2,3].map((n) => (
              <div key={n}
                className="flex flex-col items-center justify-center">
                <button
                    onClick={()=>setShowEscortDetails({})}
                    className="h-[65vw] w-[50vw] md:w-[27vw] md:h-[40vh] lg:h-[50vh] xl:h-[60vh]
                      flex justify-center 
                      border rounded-md 
                      hover:-mt-2 hover:shadow-md hover:shadow-white"
                    >escorts</button>
              </div>
            ))}
        </div>
        } 
    </div>
  )
}

export default TrainerDetailsEscorts
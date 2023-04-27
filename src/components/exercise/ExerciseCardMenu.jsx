import React, { useState } from 'react'
import {IoMdAdd} from 'react-icons/io'
import {MdOutlineAddBox} from 'react-icons/md'
import {BsBookmarkPlusFill,BsBookmarkPlus} from 'react-icons/bs'
import {FaShareSquare} from 'react-icons/fa'

const ExerciseCardMenu = ({style}) => {
    const [exercise_menu,setExerciseMenu] = useState(false) 
  return (
    <div className={style}>
        {exercise_menu && (<>
          <div className="bg-white shadow-md hover:shadow-yellow-500 rounded-full p-2 my-1 w-full mx-1">
            {false ? (
              <BsBookmarkPlusFill className="text-yellow-500" />
            ) : (
              <BsBookmarkPlus className="text-yellow-500" />
            )}
          </div>
          <div className="bg-white shadow-md hover:shadow-red-600 rounded-full  p-2 my-1 w-full mx-1">
            <MdOutlineAddBox className='text-red-500'/>
          </div>
          <div className="bg-white shadow-md hover:shadow-black rounded-full p-2 my-1 w-full mx-1">
            <FaShareSquare />
          </div>
          </>
        )}
        <button
            onClick={()=>{
                setExerciseMenu(!exercise_menu);
            }}
            ><IoMdAdd className='text-blue-500 text-xl '/></button>
        
    </div>
  )
}

export default ExerciseCardMenu
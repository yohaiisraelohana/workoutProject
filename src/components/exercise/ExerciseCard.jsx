import React from 'react'
import ExerciseCardMenu from './exerciseCardMenu'
import { Link } from 'react-router-dom';

const Card = ({exercise,style,id}) => {
    
    return (
        <div className={`card flex justify-center ${style ? style : ''} bg-white shadow-lg rounded-lg relative`}>
            <div className="block max-w-sm ">
                <Link to={`/exercises/${id}`}> 
                    <img
                        className="rounded-t-lg"
                        src={exercise.gifUrl}
                        alt="" />
                </Link>        
                <div className="p-3 ">
                    <h5
                        className="mb-2 text-xl text-center">
                        {exercise.name}
                    </h5>
                </div>
            </div>
            <ExerciseCardMenu style={" absolute max-sm:bottom-1 max-sm:right-1 bottom-5 right-5 flex max-md:flex-wrap max-md:w-[8vw] items-center"}/>
        </div>
  )
}

export default Card
//react imports
import React, { useState } from 'react'

//components imports
import ExerciseCard from './ExerciseCard'
const ExercisePreview = ({exercises_muscle}) => {

  const [exercise_list,setExercise_list] = useState(exercises_muscle);



  return (
    <div>
        <div 
          className=" h-fit w-full py-6  ">
          <div 
            className="grid grid-flow-col grid-rows-1 md:grid-rows-2 gap-8 overflow-x-auto">
              {exercise_list.map((exercise,i)=>(
                <ExerciseCard id={exercise._id} exercise={exercise} key={i} style={"w-[40vw]  bg-white h-[40vh] sm:h-[50vh] md:w-[20vw] overflow-y-auto "} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default ExercisePreview




/*

               {exercises_muscle.map((exercise,index)=>{
                 if(index<8){
                   return(<Card title={exercise.name} gif={exercise.gifUrl} key={exercise.id}/>);
                 }
               })}
 */
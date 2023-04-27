import React from 'react'

const MuscleCollection = ({muscle_collection,muscle_collection_obj,style}) => {

  return (
     muscle_collection.map((muscle)=>(
        <button key={muscle.muscle}
          className={`bg-white text-center w-full rounded-md shadow shadow-zinc-300 hover:shadow-lg hover:shadow-zinc-300  
          ${muscle_collection_obj.state_data === muscle.muscle ? "border-b" :" "}
          ${style ? style : ""}`}
          onClick={()=>{
            if(muscle_collection_obj.name === "bodyParts"){
              if(muscle_collection_obj.state_data === muscle.muscle){
                muscle_collection_obj.onclick_state_func('');
              }else{
                muscle_collection_obj.onclick_state_func(muscle.muscle);
              }
            }}}>
            <img  src={muscle.img}/>
            <p className={` text-lg 
              ${style ? style : ""}`}>{
              muscle.muscle === 'upper arms' ? 'Arms' 
              : (muscle.muscle === 'lower legs' ? 'Calves' 
              : (muscle.muscle === 'upper legs' ? 'Legs' 
              : (muscle.muscle === 'waist' ? 'Abs'
              : muscle.muscle)))
              }</p>
        </button>
    ))
  )
}

export default MuscleCollection
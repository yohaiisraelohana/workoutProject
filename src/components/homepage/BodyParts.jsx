//react imports
import React, { useState,useEffect } from 'react'
import { useQueryClient } from 'react-query'

//components imports
import ExercisePreview from '../exercise/ExercisePreview';
import BasicSkeleton from '../skeletons/BasicSkeleton';
import MuscleCollection from '../exercise/MuscleCollection';

//redux imports
import { useSelector} from 'react-redux'

const BodyParts = () => {
  const {exercises} = useSelector((store)=>store.exerciseReducer);
  const {muscle_collection} = useSelector(store => store.exerciseReducer);
  const [exercises_list,setExercisesList] = useState([]);
  const [muscle_preview,setMuscle_preview] = useState('');


  const queryClient = useQueryClient();
  //const exercises_list = queryClient.getQueryData('exercises');

  const muscle_collection_obj = {
    name :"bodyParts",
    state_data:muscle_preview,
    onclick_state_func:setMuscle_preview
  }

  useEffect(()=>{
    const new_exercises_list = exercises.data.filter((exercise)=>exercise.bodyPart===muscle_preview.toLowerCase());
    setExercisesList(new_exercises_list);
  },[muscle_preview]);

  console.log(muscle_preview);
  console.log(exercises_list);


  return (
    <div className='body_parts w-screen flex justify-center bg-black bg-opacity-80'>
      <div className="w-5/6 my-20 ">
        <p className='text-3xl text-center text-white my-3'> Bodyparts Exercise</p>
        <div className="flex overflow-y-auto overflow-x-auto  lg:grid lg:grid-cols-8 lg:gap-4 lg:justify-center">
          <MuscleCollection style={' max-sm:w-[30vw] max-md:w-[20vw] max-lg:w-[15vw] max-lg:mx-2'} muscle_collection={muscle_collection} muscle_collection_obj={muscle_collection_obj}/>
        </div>
        {exercises_list.length > 0 && <ExercisePreview muscle={muscle_preview} exercises_muscle={exercises_list}/>}

      </div>
    </div>
  )
}

export default BodyParts


/*
        :
        <div className=" h-fit py-6 mt-2">
          <div className="grid grid-cols-4 gap-8 h-[65vh] overflow-y-auto">
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
            <BasicSkeleton height={"30vh"} rounded={"30px"}/>
          </div>
        </div>

*/

/*
bg-[url('./src/assets/signUpBackgraund.jpeg')]

  // const options_exercises = {
  //   method: 'GET',
  //   headers: {
  //       'X-RapidAPI-Key': 'd81bab2858msh4e6269dcb5f34a3p1dfeddjsnd35c792acbba',
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }
  // }
  //   useEffect( ()=>
  //      fetch('https://exercisedb.p.rapidapi.com/exercises', options_exercises)
  //       .then(response =>  response.json())
  //       .then(response => setExercises_list(response))
  //       .catch(err => console.error(err))
  //    ,[]);
  //  console.log(exercises_list);

  // const exerciseContext = useContext(ExerciseContext);
  // console.log(exerciseContext);
*/
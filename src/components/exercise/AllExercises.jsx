//react imports
import React,{useEffect, useRef, useState} from 'react'

//icons imports
import {AiOutlineSearch} from 'react-icons/ai'

//redux imports
import { useSelector } from 'react-redux';

//components imports
import MuscleCollection from './MuscleCollection';
import ExerciseCard from './ExerciseCard';
import BasicSkeleton from '../skeletons/BasicSkeleton'

const AllExercises = () => {

    const {exercises} = useSelector(store => store.exerciseReducer);
    const {muscle_collection} = useSelector(store => store.exerciseReducer);
    const [filtered_exercises,setFilteredExercises] = useState([]); 
    const [specific_muscle,setSpecificMuscle] = useState('');
    const [specific_target,setSpecificTarget] = useState('');
    const search_input_ref = useRef();
    const muscle_collection_obj = {
        name :"bodyParts",
        state_data:specific_muscle,
        onclick_state_func:setSpecificMuscle
    }

console.log(filtered_exercises);
    useEffect(()=>{
        console.log(specific_muscle);
        setSpecificTarget('');
        setFilteredExercises((exercises.data.filter((e)=>e.bodyPart === specific_muscle.toLocaleLowerCase())));
    },[specific_muscle]);

    useEffect(()=>{
        console.log(specific_target);
        if(specific_target === ''){
            setFilteredExercises((exercises.data.filter((e)=>e.bodyPart === specific_muscle.toLocaleLowerCase())));
        }else{
            setFilteredExercises((exercises.data.filter((e)=>e.bodyPart === specific_muscle.toLocaleLowerCase())));
            setFilteredExercises([...filtered_exercises.filter(e => e.target === specific_target)]);
        }
    },[specific_target]);

    const hundleSearch = () => {
        console.log(search_input_ref.current.value);
        if(search_input_ref.current.value === ''){
            if(specific_muscle !== ''){
                setFilteredExercises((exercises.data.filter((e)=>e.bodyPart === specific_muscle.toLocaleLowerCase())));
                if(specific_target !== ''){
                    setFilteredExercises([...filtered_exercises.filter(e => e.target === specific_target)]);
                }
            }
        }else{
            setFilteredExercises([...filtered_exercises.map((e)=>{
                return (e.target.toLocaleLowerCase().includes(search_input_ref.current.value.toLocaleLowerCase) || e.bodyPart.includes(search_input_ref.current.value) || e.name.includes(search_input_ref.current.value))
            })])
        }
    }


  return (
    <div className=' w-screen h-screen overflow-y-auto bg-allExercises bg-cover bg-no-repeat bg-center'>
        <div className="flex flex-wrap pt-14 pb-4 justify-center h-full w-screen bg-black bg-opacity-60">
        <div className="flex w-[90vw] max-md:w-[97vw] mt-6 rounded-md">
            <aside className=' w-3/12 sm:w-2/12 h-[100vh] overflow-y-auto'>
                <ul className='sm:p-2 md:p-4 grid grid-cols-1 gap-4'>
                     <MuscleCollection muscle_collection={muscle_collection} muscle_collection_obj={muscle_collection_obj}/> 
                </ul>
            </aside>

            <div className=" w-10/12 ">
                <div className={`max-md:flex-wrap gap-2 max-md:justify-center flex ${specific_muscle == '' ? 'justify-evenly' : 'justify-between'} p-4 items-center`}>
                    {specific_muscle !== '' && 
                    <div className="w-full max-md:flex-wrap max-md:justify-evenly md:w-3/4 flex justify-between items-center">
                        {muscle_collection.find((m)=>m.muscle === specific_muscle).targets.map((t)=>(
                            <button 
                                onClick={()=>{
                                    setSpecificTarget(t);
                                }}
                                className={`${specific_target === t ? "text-blue-500" : " text-white border hover:text-blue-500 hover:border-0"} my-1 mt-2 p-2 rounded-md`}  key={t} >{t}</button>
                        ))}
                    </div> }
                    
                    <form action=""
                        className='relative border-2 rounded-md p-1 bg-white max-md:order-first focus-within:border-blue-500'>

                        <input type="text"
                            ref={search_input_ref}
                            onChange={()=>hundleSearch()}
                            className=' outline-none text-center' />

                        <AiOutlineSearch
                            className=' absolute right-2 top-2'/>
                    </form>
                </div> 
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 h-[90vh] p-4 gap-4 overflow-scroll">
                    {exercises.status !== "loading" ?
                        (filtered_exercises.length > 0 ?
                            (filtered_exercises.map((e,i)=>(
                                <div className="border h-full bg-white rounded-md" key={i}>
                                    <ExerciseCard id={e._id} exercise={e} style={"h-full"} />
                                </div>
                            )))
                        :
                            (exercises.data.map((e,i)=>(
                                <div className="border h-full bg-white rounded-md" key={i}>
                                    <ExerciseCard id={e._id} exercise={e} style={"h-full"} />
                                </div>
                            ))))
                    :
                    (new Array(12).fill(0).map((n,i) => (
                        <BasicSkeleton height={"100%"} rounded={"6px"} key={i}/>
                    )))
                    }
                </div> 
            </div>
        </div>
    </div>
    </div>
  )
}

export default AllExercises
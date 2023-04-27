import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {OpenAIApi,Configuration} from 'openai'
import Typewriter from 'typewriter-effect';

import { getSingleExercises } from '../../redux/features/exercisesSlice';



//assets
  //icons
  import {AiOutlineArrowRight} from 'react-icons/ai'
  //skeletons
  import BasicSkeleton from '../skeletons/BasicSkeleton'

  const configuration = new Configuration({
    apiKey:"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"
  })
  
  const openGpt = new OpenAIApi(configuration);

const Exercise = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [gpt_ans,setGptAns] = useState(null);

  const dispatch = useDispatch();
  const {single_exercise} = useSelector(store => store.exerciseReducer);
  

  const doApiGpt = async () => {
    const res = await openGpt.createCompletion({
      model: "text-davinci-003",
      prompt:`explain me about ${single_exercise.data.name} exercise ,and what is important to know about him before trying`,
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
  })
  .then((data)=>{
    console.log(data.data);
    setGptAns(data.data.choices[0].text)})
  }

  const getData = () => {
    dispatch(getSingleExercises(id));
  }

  useEffect(()=>{
    getData();
  },[])

  console.log(single_exercise);

  useEffect(()=>{
    if(single_exercise.status === "succeeded"){
      doApiGpt();
    }
  },[single_exercise.status]);



  return (
    <div className='w-screen bg-allExercises bg-cover bg-no-repeat bg-center h-screen overflow-y-auto'>
      <div className="w-screen bg-black bg-opacity-60 py-14 flex flex-wrap justify-center h-fit">
      {single_exercise.status !== "loading" ? <div className="flex max-md:flex-wrap w-5/6 mt-4">
        <div className="max-md:w-full w-1/2 ">
          <div className="h-[65vh] flex items-center justify-center relative">
            <img
              className="rounded-t-lg h-full w-full"
              src={single_exercise.data.gifUrl}
              alt="" />
            <button className=' absolute right-5 text-black top-5 md:hidden'
              onClick={()=>navigate(-1)}><AiOutlineArrowRight/></button>
          </div>
          <div className="flex h-[20vh] max-md:justify-center max-md:flex-wrap justify-evenly items-center border text-white text-2xl">
              <p>Equipment: <span className='text-lg' >{single_exercise.data.equipment}</span> </p>
              <p>Target: <span className='text-lg' >{single_exercise.data.target}</span> </p>
          </div>
        </div>
        <div className="max-md:w-full w-1/2 border p-4 md:p-12 h-[85vh] overflow-y-auto relative text-white">
            <p className='text-4xl max-md:text-center'>{single_exercise.data.name}</p>
            <p className='text-lg my-[5vh] max-md:text-center'>{gpt_ans ? 
              <Typewriter
                options={{
                    strings:gpt_ans,
                    autoStart:true,
                    delay:30
                }}
                /> 
            : <BasicSkeleton/> }</p>
            <button className=' absolute right-5 top-5 max-md:hidden'
              onClick={()=>navigate(-1)}><AiOutlineArrowRight/></button>
        </div>
      </div> : <p>loading</p>}
      </div>
    </div>
  )
}

export default Exercise

/**
 * import React ,{useRef,useState} from 'react'
import {OpenAIApi,Configuration} from 'openai'
import './App.css'

const configuration = new Configuration({
  apiKey:"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"
})

const openGpt = new OpenAIApi(configuration);

const App = ()=> {
  const [gpt_ans,setGptAns] = useState(null);
  const doApiGpt = async () => {
    const res = await openGpt.createCompletion({
      model: "text-davinci-003",
      prompt:gptRef.current.value ,
      temperature: 0.7,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
  })
  .then((data)=>{
    console.log(data.data);
    setGptAns(data.data.choices[0].text)})
  }

  const gptRef = useRef();
 return (
    <div className="App">
      <div className="">
        <textarea name="q" id="q" cols="30" rows="10"
          ref={gptRef}/>
      </div>
      <button
        onClick={()=>doApiGpt()}
        >submit</button>
      <div className="">
        {gpt_ans && <div>{gpt_ans}</div>}
      </div>
    </div>
  )
}

export default App

//    "openai": "^3.2.1",
 */
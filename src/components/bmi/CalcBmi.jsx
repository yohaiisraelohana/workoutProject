//react imports
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

//components imports
import PieChartWithNeedle from '../PieChartWithNeedle'

const CalcBmi = () => {
  const [age_input,setAge_input] = useState(true);
  const [weight_input,setWeight_input] = useState(true);
  const [height_input,setHeight_input] = useState(true);
  const [bmi,setBmi] = useState(1);


  const {register,handleSubmit,formState:{errors}} =  useForm();

  
  const calcBmi = (data) => {
    let k = parseFloat(data.kg);
    let c =  parseFloat(data.cm);
    c /=100;
    setBmi(k/(c*c));
  }

  return (
    <div className='h-fit flex items-center  w-screen justify-center'>
        <div className=" flex w-5/6 flex-wrap  h-fit items-center p-4 border-t ">
          <div className="flex flex-wrap items-center h-fit w-full justify-center pb-[10vh]">
                <PieChartWithNeedle width={300} height={200} value={bmi}/>
                <p className='w-full text-center text-white text-3xl italic'>BMI{bmi > 1 ? `:${bmi.toFixed(0)}`:""}</p>
                <form action="" onSubmit={handleSubmit(calcBmi)}
                  className='w-full flex flex-wrap justify-evenly my-8 items-end'>

                <div className=" h-fit relative flex flex-wrap justify-center items-center rounded-md max-md:my-3">
                  <p className={`text-white text-center text-lg mb-2 z-10 absolute ${age_input ? "" : "-top-7"}`}>Age</p>
                  <input type='number'  
                    placeholder={age_input ? "" : "YEARS"}
                    className=' rounded-md bg-transparent p-4 w-full outline-none text-white border'
                    onFocus={()=>{setAge_input(false)}}
                    onBlur={()=>{setAge_input(true)}}
                    {...register("years",{required:true})}/>
                </div>

                <div className="h-fit relative flex flex-wrap justify-center items-center rounded-md max-md:my-3">
                  <p className={`text-white text-center text-lg mb-2 z-10 absolute ${weight_input ? "" : "-top-7"}`}>weight</p>
                  <input type="number" 
                    placeholder={weight_input ? "" : "KG"} 
                    className=' rounded-md bg-transparent p-4 w-full outline-none text-white border'
                    onFocus={()=>{setWeight_input(false)}}
                    onBlur={()=>{setWeight_input(true)}}
                    {...register("kg",{required:true})}/>
                </div>               
                <div className="h-fit relative flex flex-wrap justify-center items-center rounded-md max-md:my-3">
                  <p className={`text-white text-center text-lg mb-2 z-10 absolute ${height_input ? "" : "-top-7"}`}>Height</p>
                  <input type="number" 
                    placeholder={height_input ? "" : "CM"}
                    className=' rounded-md bg-transparent p-4 w-full outline-none text-white border'
                    onFocus={()=>{setHeight_input(false)}}
                    onBlur={()=>{setHeight_input(true)}}
                    {...register("cm",{required:true})}/>
                </div>
                <div className="w-full flex justify-center p-2 mt-6">
                  <button type='submit'
                    className='border py-2 px-8 rounded-md text-white bg-blue-500 hover:bg-blue-500 shadow-lg shadow-blue-500/50'>Calc</button>
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}

export default CalcBmi
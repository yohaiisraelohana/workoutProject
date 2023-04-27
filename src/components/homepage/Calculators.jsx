import React, { useState } from 'react'
import CalcBmi from '../bmi/CalcBmi';
import CalcMeal from '../meals/CalcMeal';

const Calculators = () => {
    const [calc,setCalc] = useState("meal");
  return (
    <div className=' w-screen flex justify-center flex-wrap bg-black bg-opacity-80 max-md:pt-[10vh] pt-8 relative'>
        <p className=' absolute md:left-[10vw] text-3xl text-white max-md:-mt-[6vh] max-md:text-center'>Helpfull Calculators</p>
        <div className="flex">
            <button className={`${calc === "meal" ? "bg-white" : "border text-white"} rounded-t-lg py-3 px-5`}
                onClick={()=>setCalc("meal")}>
                Meal
            </button>
            <button className={`${calc === "bmi" ? "bg-white" : "border text-white"} rounded-t-lg py-3 px-5`}
                onClick={()=>setCalc("bmi")}>
                BMI
            </button>
        </div>
        {calc === "meal" && <CalcMeal/>}
        {calc === "bmi" && <CalcBmi/>}
    </div>
  )
}

export default Calculators
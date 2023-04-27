//react imports
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

//componnents imports
import CircleChart from '../CircleChart'
import TableWithTotal from '../TableWithTotal'
import EnterAmountForm from './EnterAmountForm'


const CalcMeal = () => {
    const {register,watch,handleSubmit,formState:{errors},resetField} = useForm();

    const input_value = watch("search_dish");
    const [foods_options,setFoods_options] = useState(null);
    const [selected_foods,setSelected_foods] = useState([]);
    const [food_amount , setFood_amount] = useState(false);
    const [food_datails,setFoodDetails] = useState({});
    const [search_result_field,setSearchResultField ] = useState(false);
    const [total_meal,setTotal_meal] = useState({
        protein:1,
        total_fat:1,
        carbohydrates:1,
        food_energy:1,
    });


    useEffect(()=>{
        if(input_value !== undefined ){
            if(input_value.length > 2 ){
                fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${input_value}`)
                    .then(res => res.json())
                    .then(data => setFoods_options(data.result.records) )
                    .catch(err => console.log(err))
            }
        }
    },[input_value]);

    useEffect(()=>{
        setTotal_meal({
            protein:0,
            total_fat:0,
            carbohydrates:0,
            food_energy:0,
        });
        for (let index = 0; index < selected_foods.length; index++) {
            setTotal_meal({
                protein:total_meal.protein + selected_foods[index].protein,
                total_fat:total_meal.total_fat + selected_foods[index].total_fat,
                carbohydrates:total_meal.carbohydrates + selected_foods[index].carbohydrates,
                food_energy:total_meal.food_energy + selected_foods[index].food_energy,
            })
        }
    },[selected_foods])


  return (
    <div className=" h-fit flex items-center  w-screen justify-center ">
        <div className=" flex w-full md:w-5/6 flex-col h-fit items-start  p-4 border-t pt-12">
            <div className="flex max-md:flex-wrap max-sm:h-[50vh] h-[70vh] md:h-[50vh] w-full">

                <div className="circleChart flex md:flex-col justify-between  w-full max-sm:h-2/3 h-1/2 md:w-2/4 md:h-full">
                    <CircleChart data={[
                        {name:"Protein",value:(Number(total_meal.protein.toFixed(2))||1)},
                        {name:"Fat",value:(Number(total_meal.total_fat.toFixed(2))||1)},
                        {name:"Carbs",value:(Number(total_meal.carbohydrates.toFixed(2))||1)}]}/>
                </div>

                <div className=" flex flex-col justify-center items-end w-full  max-sm:h-1/3 md:w-2/4 md:h-full">
                    <input type="text"
                        {...register("search_dish")}
                        className=' w-full border p-2 rounded-sm shadow-md outline-none'

                        placeholder='search for food'
                        onFocus={()=>{
                         setSearchResultField(true);}}/>

                {search_result_field &&
                    (food_amount ?  

                        <div className='h-[30vh] w-full shadow-md  flex items-center justify-center bg-white bg-opacity-20'>
                            <EnterAmountForm 
                                handleSubmit={handleSubmit} 
                                setFood_amount={setFood_amount} 
                                setSelected_foods={setSelected_foods} 
                                register={register}
                                setFoods_options={setFoods_options}
                                resetField={resetField}
                                selected_foods={selected_foods}
                                food_datails={food_datails}/>
                        </div>
                    :   
                        <div className="searched_results shadow-md bg-white  w-full h-[30vh]  overflow-auto bg-opacity-20 rounded-sm">

                            {foods_options && foods_options.map((food)=>(
                                <button 
                                    className='p-2 border-b w-full hover:bg-gray-100 bg-white'
                                    key={food._id}
                                    onClick={()=>{
                                        setFoodDetails({
                                            amount:1,
                                            _id:food._id,
                                            english_name:food.english_name,
                                            protein:food.protein/100 ,
                                            carbohydrates:food.carbohydrates/100,
                                            total_fat:food.total_fat/100 ,
                                            food_energy:food.food_energy/100
                                        })
                                        setFood_amount(!food_amount);
                                    }}>{food.english_name}</button>
                            ))}

                        </div>)
                }


                </div>
            </div>
            <div className="w-full h-full flex items-center">
                    <TableWithTotal 
                        data_array={selected_foods} 
                        setDataArray={setSelected_foods}
                        details_to_print={["english_name","protein","carbohydrates","total_fat","food_energy"]}
                        th_array={["Food name","Protein","carbs","Fat","calories"]}
                        total={[total_meal]}
                        setTotal={setTotal_meal}
                    />
            </div>
        </div>
    </div>
  )
}
export default CalcMeal


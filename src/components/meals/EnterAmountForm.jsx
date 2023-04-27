import React from 'react'

const EnterAmountForm = ({handleSubmit,setSelected_foods,setFood_amount,register,food_datails,selected_foods,setFoods_options,resetField}) => {
  return (
    <form className='border rounded-md bg-blue-500'
    onSubmit={handleSubmit((data)=>{
        setSelected_foods([...selected_foods,{
            amount:data.amount,
            _id:food_datails._id,
            english_name:food_datails.english_name,
            protein:food_datails.protein * data.amount,
            carbohydrates:food_datails.carbohydrates * data.amount,
            total_fat:food_datails.total_fat * data.amount,
            food_energy:food_datails.food_energy * data.amount
        }]);
        setFoods_options(null);
        resetField("search_dish")
        setFood_amount(false);
    })}>

    <input type="text"
        className=' p-1 rounded-md outline-none bg-white'
        placeholder='gram'
        {...register("amount",{required:true})} />
    <button type='submit'
        className=' bg-blue-500 text-white p-1 rounded-md'>
        Add </button>

</form>
  )
}

export default EnterAmountForm
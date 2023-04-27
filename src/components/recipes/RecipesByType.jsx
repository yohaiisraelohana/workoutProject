//react imports
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

//icons imports
import { AiOutlineSearch,AiOutlineArrowRight } from 'react-icons/ai';

const RecipesByType = () => {
    const {type} = useParams();
    const navigate = useNavigate();
    const meals_options = [
      {
        name:"Vegan",
        bg:'vegan'
      },
      {
        name:"Meat",
        bg:'meat'
      },
      {
        name:"Vegetarian",
        bg:'eggs'
      },
      {
        name:"Milky",
        bg:'milkly'
      },
      {
        name:"Fish",
        bg:'fish'
      },
      {
        name:"High Protein",
        bg:'protein'
      }
    ];
    const meal_type = meals_options.find((m)=>m.name == type);
  return (
    <div 
        className={`h-screen w-screen bg-${meal_type.bg} bg-no-repeat bg-cover bg-center overflow-y-auto`}>
        <div 
            className=" relative h-fit w-screen bg-black bg-opacity-80 flex flex-wrap justify-center items-center overflow-y-auto">
            <button 
              onClick={()=> navigate(-1)}
              className='text-white absolute top-[12vh] right-[10vw] text-xl'
              ><AiOutlineArrowRight/></button>
                <div 
                    className="flex max-sm:flex-wrap w-5/6 justify-between mt-[20vh] mb-[2vh]">
                    <p
                        className='text-4xl text-white font-mono'>{meal_type.name}</p>
                    <div className="flex items-end relative">
                    <input
                      type="text"
                      className="border bg-transparent rounded-md text-center text-white outline-none"
                      />
                      <AiOutlineSearch className=" absolute right-0 bottom-0 m-1 text-white" />

                    </div>
                </div>

                <div 
                    className="grid grid-cols-1 gap-4  sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8 h-screen w-5/6">
                        {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map((n)=>(
                            <Link key={n} to={`/recipes/single/${n}`}
                                className="h-[30vh] w-full border rounded-md"
                                >
                            </Link>
                        ))}
                </div>
        </div>

    </div>
  )
}

export default RecipesByType
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import {AiOutlineCloseCircle,AiFillCloseCircle} from 'react-icons/ai'
//IoFastFoodOutline
const AllRecipes = () => {
  const [products_included,setProductsIncluded] = useState([]);
  const search_products_ref = useRef();
  const meals_options = [
    { name:"Vegan",style:"h-[20vh] border bg-vegan  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"},
    { name:"Meat",style:"h-[20vh] border bg-meat  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"},
    { name:"Vegetarian",style:"h-[20vh] border bg-eggs  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"},
    { name:"Milky", style:"h-[20vh] border bg-milkly  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"},
    { name:"Fish", style:"h-[20vh] border bg-fish  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"},
    { name:"High Protein", style:"h-[20vh] border bg-protein  bg-center bg-cover flex justify-center items-center text-white text-4xl font-mono rounded-sm"}
  ]
  return (
    <div className=" w-screen h-screen overflow-y-auto bg-allRecipes bg-no-repeat bg-cover bg-center">
    <div
      className='w-screen pt-14 pb-4 flex flex-wrap justify-center bg-black bg-opacity-80'>

        <p 
          className="text-white text-5xl text-center w-full mt-[10vh]"
          >You DON'T Need To Eat Less
        </p>
        <p 
          className='text-white text-5xl text-center w-full mb-[5vh]'
          >You Need To Eat Right
        </p>

        <div 
          className="w-[90%] h-fit flex max-md:flex-wrap justify-between mb-[10vh] ">
            <div 
              className="w-full md:w-[74%] grid grid-cols-1 sm:grid-cols-2 gap-3">
                {meals_options.map((m)=>(
                  <Link key={m.name} 
                    to={`/recipes/${m.name}`}
                    className={m.style}
                    >{m.name}
                  </Link>
                ))}   
            </div>
            <div 
              className="w-full min-h-[40vh]   max-md:my-3 md:w-1/4 border rounded-sm 
                   text-white p-2 relative  "
                >
                <div className="flex justify-center text-xl">
                  <p className='font-mono text-center' >Search recipes by products</p>
                </div>
                <div className="w-full flex justify-center">
                  <div className="flex my-3 max-md:w-fit rounded-md h-fit  bg-blue-500  hover:bg-blue-400 shadow-lg shadow-blue-500/50">
                    <input type="text"
                      ref={search_products_ref}
                      className='rounded-md p-1 outline-none text-center text-[#333] w-3/4' />
                    <button 
                      onClick={()=>setProductsIncluded([...products_included,search_products_ref.current.value])}
                      className='p-1 w-1/4'
                      >Add</button>
                  </div>
                </div>

                <div className="w-full flex flex-wrap gap-2 h-[20vh] md:h-[40vh] overflow-y-auto justify-center border-t p-1 py-3">
                  {products_included.map((p,i) => (
                    <div key={i} className="flex h-fit items-center w-fit bg-white p-1 rounded-md text-black mx-1">
                      <p className='mx-1' >{p}</p>
                      <AiOutlineCloseCircle
                        className=' hover:text-red-500'
                        onClick={()=>setProductsIncluded([...products_included.filter((pr)=>pr!==p)])}/>
                    </div>
                  ))}
                </div>
                <div className=" absolute bottom-6 left-0 flex justify-center w-full">
                  <button 
                    className='bg-blue-500 p-1 rounded-md hover:bg-blue-400 shadow-lg shadow-blue-500/50'
                    onClick={()=>console.log(products_included)}
                    >Search Recipes</button>
                </div>
                
            </div>
            
        </div>

    </div>
    </div>
  )
}

export default AllRecipes
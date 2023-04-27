//react
import React from 'react'

//components
import ArticleCard from './ArticleCard';

//assets
import {AiOutlineSearch } from 'react-icons/ai'
import {BsBook } from 'react-icons/bs'


const Allarticles = () => {
  
  return (
    <div className=" w-screen h-screen overflow-y-auto bg-allArticles bg-cover bg-no-repeat">
    <div 
      className="w-screen pt-14 pb-4 flex flex-wrap justify-center bg-black bg-opacity-80">
      <p 
        className="w-full text-white text-5xl text-center px-[10vh] py-[5vh] md:p-[10vh]">
        Rich Your Knowlage
      </p>

      <div 
        className="flex flex-wrap w-5/6 ">
        <div 
          className="w-full flex flex-wrap justify-center md:justify-between">
          <div 
            className="flex items-end relative md:hidden mb-4">

            <input
              type="text"
              className="border bg-transparent rounded-md text-center text-white outline-none"
            />
            <AiOutlineSearch 
              className=" absolute right-0 bottom-0 m-1 text-white" />

          </div>
          <div 
            className=" max-md:flex max-md:w-full max-md:justify-around">
              {[{name:"PowerLifting",onClick:()=>console.log("p")},
                {name:"BodyBilding",onClick:()=>console.log("b")},
                {name:"Nutrition",onClick:()=>console.log("n")}]
                .map((b) => (
                  <button key={b.name}
                    className="p-2 border bg-white rounded-md mx-2 hover:shadow-lg hover:shadow-blue-500/50 hover:text-blue-500"
                    onClick={b.onClick}>
                    {b.name}
                  </button>
                )
                )}
          </div>

          <div 
            className="md:flex items-end relative hidden">

            <input
              type="text"
              className="border bg-transparent rounded-md text-center text-white outline-none"
            />
            <AiOutlineSearch className=" absolute right-0 bottom-0 m-1 text-white" />

          </div>

        </div>

        <div className="w-full h-fit mt-2">

          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <ArticleCard key={n} n={n} />
          ))}

        </div>




        <div 
          className="w-full flex justify-center text-white">
          <div 
            className="flex mx-2 hover:shadow-md hover:shadow-blue-500">
            {[1].map((n) => (
              <BsBook key={n} />
            ))}
          </div>
          <div 
            className="flex mx-2 hover:shadow-md hover:shadow-blue-500">
            {[1, 2].map((n) => (
              <BsBook key={n} />
            ))}
          </div>
          <div 
            className="flex mx-2 hover:shadow-md hover:shadow-blue-500">
            {[1, 2, 3].map((n) => (
              <BsBook key={n} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Allarticles;
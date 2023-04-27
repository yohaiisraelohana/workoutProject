import React from 'react'
import { Link } from 'react-router-dom'
import ArticleCard from './ArticleCard'

const ArticlesPreview = () => {
  return (
    <div className='w-screen h-fit flex flex-wrap justify-center bg-black bg-opacity-80 max-md:py-[7vh]  lg:pb-[10vh]'>
      <div className="flex w-full justify-center">
        <div className="text-white text-center flex flex-wrap justify-center mb-2 md:mb-4">
          <p className='text-3xl text-white'>Rich Articles</p>
          <p className='w-full text-white'>Rich and full of knowledge articles from the best experienced trainers and nutritionists</p>
        </div>
      </div>
      <div className="h-[25vh] sm:h-[50vh] md:h-[70vh] overflow-y-auto lg:w-[80vw]">

      <div className="flex justify-between w-full h-[25vh] sm:h-[30vh] items-center overflow-x-auto max-md:mb-5 mb-10">
        <div className="w-[75vw] h-full overflow-y-auto ">
          {[1,2,3,4].map((n)=>(
          true ? <ArticleCard key={n} n={n}/> : <div key={n} className="h-[15vh] sm:h-[25vh] border my-4 bg-white"></div>
            
          ))}
        </div>
        <p className="w-[20vw] text-xl text-center text-white">Fitness</p>
      </div>

      <div className="flex justify-between w-full h-[25vh] sm:h-[30vh] items-center overflow-x-auto ">
        <div className="w-[75vw] h-full overflow-y-auto ">
        {[1,2,3,4].map((n)=>(
          true ? <ArticleCard key={n} n={n}/> : <div key={n} className="h-[15vh] sm:h-[25vh] border my-4 bg-white"></div>
            
          ))}        </div>
        <p className="w-[20vw] text-xl text-center text-white">Hilthy</p>
      </div>

      </div>

    </div>
  )
}

export default ArticlesPreview

/**
 * import React from 'react'
import { Link } from 'react-router-dom'


const ArticlesPreview = () => {
  return (
    <div className='w-screen h-fit flex justify-center py-20 bg-black bg-opacity-80'>
      <div className="w-5/6 flex flex-row-reverse items-center gap-x-8 overflow-auto ">
      <div className="text-white text-center">
        <p className='text-3xl w-[20vw]'>Rich Articles</p>
        <p>Rich and full of knowledge articles from the best experienced trainers and nutritionists</p>
      </div>
      <div className="w-full">
        <p className='text-center m-auto text-3xl mb-4 text-white'>Fitness</p>
        <div className="m-auto grid gap-6 w-[45vw] h-[75vh] px-2 overflow-y-auto ">
          {[1,2,3,5,6,7].map((n)=>(
            <Link to={`/articles/${n}`} key={n}
            className='border h-44 rounded-sm bg-white hover:shadow-lg hover:shadow-white'>
              <p className='text-center'>article</p>
             </Link>
          ))}
        </div>
        
      </div>
      <div className="w-full">
        <p className='text-center m-auto text-3xl mb-4 text-white text'>Healthy</p>
        <div className="m-auto grid gap-6 w-[45vw] h-[75vh] px-2 overflow-y-auto ">
        {[1,2,3,5,6,7].map((n)=>(
            <Link to={`/articles/${n}`} key={n}
            className='border h-44 rounded-sm bg-white hover:shadow-lg hover:shadow-white'>
              <p className='text-center'>article</p>
             </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default ArticlesPreview
 */
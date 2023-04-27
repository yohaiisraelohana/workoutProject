import React, {useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ArticleContext} from '../../contexts/ArticleContext'

import ArticleMenu from './ArticleMenu';

import { AiOutlineHeart } from "react-icons/ai";
import {FaRegComment} from 'react-icons/fa'
import {BsReply} from 'react-icons/bs'

const Article = () => {
  const {id} = useParams();
  const article = useContext(ArticleContext);
  const [comment_input , setCommentInput] = useState(false);
//!change the title to inside instide on the img
  console.log(article);
  return (
   ( article ? 
    <div className={` w-screen h-fit flex flex-wrap justify-center bg-black bg-opacity-97 pt-[8vh] `}>
        {article.main_img && <img 
          className='w-screen'
          src={article.main_img} alt="" />}
        <div className="w-[90vw] h-fit -mt-[5vh] md:-mt-[10vh] lg:-mt-[17vh] xl:-mt-[40vh] p-4 pb-8 z-10 relative bg-white rounded-md">          
          <p className='text-3xl drop-shadow-lg text-center my-2'>{article.title}</p>
          
          {article.body.map((p,i)=>{
            switch(p.type){
              case "p":
                return <p className='my-2 text-[#333] text-xl' key={i}>{p.text}</p>
              case "pre":
                console.log(p.text);
                return(
                <div className="relative w-full overflow-x-auto border h-fit bg-gray-200 my-2">
                 <pre className='-ml-[20vw] sm:-ml-[15vw] md:-ml-[10vw] lg:-ml-[7vw] xl:-ml-[5vw]' key={i}>{p.text}</pre>
                </div>)
              case "img":
                return <img className='my-4 w-full' key={i} src={p.text} alt="" />
              default:
                return <p key={i}>{p.text}</p>
            }
          })}
          <div className="flex items-end justify-between mt-6 mb-2 relative">
              <div className="flex items-end">
                <div className="h-8 w-8 border border-blue-500 rounded-full"></div>
                <p className="mx-2 text-xl">Author name</p>
              </div>
              <ArticleMenu id={id} style={"absolute right-2 top-2 z-10 flex max-md:flex-wrap max-md:w-8 justify-center"} />
          </div>

          <div className="flex justify-between  w-full border-t">
            <div className="">
              <p>{article.created_at}</p>
            </div>
            <div className="m-1 flex">
                <AiOutlineHeart className='text-red-600 text-2xl'/>
                <p className='text-red-600 mx-1'>200</p>
            </div>
          </div>

          <div className="mt-4 border-b flex justify-between">
            <p className='text-xl text-center' >Comments</p>
            <div className="m-1 flex items-end">
              <FaRegComment 
                onClick={()=>{
                  setCommentInput(!comment_input)
                }}
                className='text-xl hover:text-yellow-600'/>
              <p className='mx-1'>100</p>
            </div>
          </div>

          {comment_input && 
            <textarea className='w-full border h-[10vh] outline-none p-2' 
              placeholder=' Write your comment here' ></textarea> }


          {article.comments.map((c,i)=>(
            <div className="flex flex-wrap h-fit w-full border-b items-end" key={i}>
              <div className="flex justify-between w-full">
                <p className='text-lg'>{c.user_id}</p>
                <p className='text-lg p-1'><BsReply/></p>
              </div>
              <div className="">
                <p className='text-[#333]'>{c.comment}</p>
                {c.replays && c.replays.map((r,i)=>(
                  <div className="ml-[10%]">
                    <p className='text-lg' >{r.user_id}</p>
                    <p className='text-[#333]'>{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
    </div>
    : <p>Loding</p> )
  )
}

export default Article
import React,{ useState} from 'react'

//assets
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import {
  BsBookmarkPlus,
  BsBookmarkPlusFill,
  BsThreeDots,
} from "react-icons/bs";
import { FaShareSquare } from "react-icons/fa";
//! give them px
const ArticleMenu = ({id,style}) => {
    const [article_menu, setArticleMenu] = useState(false);
  return (
    <div className={style ? style : ` absolute right-4 top-2 z-10 flex max-md:flex-wrap max-md:w-8 justify-center`}>
        <button
          className="text-xl w-full p-1 hover:text-blue-500 md:hidden"
          onClick={() =>
            setArticleMenu(!article_menu)
          }
        >
          <BsThreeDots />
        </button>
        {article_menu && (
          <div className="bg-white shadow-md hover:shadow-black rounded-full p-2 my-1 w-full md:mx-1">
            <FaShareSquare />
          </div>
        )}
        {article_menu && (
          <div className="bg-white shadow-md hover:shadow-blue-500 rounded-full p-2 my-1 w-full md:mx-1">
            {false ? (
              <BsBookmarkPlusFill className="text-blue-500" />
            ) : (
              <BsBookmarkPlus className="text-blue-500" />
            )}
          </div>
        )}
        {article_menu && (
          <div className="bg-white shadow-md hover:shadow-red-600 rounded-full p-2 my-1 w-full md:mx-1">
            {false ? (
              <AiFillHeart className="text-red-600" />
            ) : (
              <AiOutlineHeart className="text-red-600" />
            )}
          </div>
        )}
        <button
          className="text-xl w-full p-1 hover:text-blue-500 max-md:hidden"
          onClick={() =>
            setArticleMenu(!article_menu)
          }
        >
          <BsThreeDots />
        </button>
    </div>
  )
}

export default ArticleMenu
//react
import React from "react";
import { Link } from "react-router-dom";
import ArticleMenu from "./ArticleMenu";



const ArticleCard = ({ n }) => {

  return (
    <div className="h-[20vh] relative flex flex-col justify-between p-4 bg-white md:h-[25vh] w-full border my-6 rounded-md hover:shadow-md hover:shadow-blue-500">
      <p className="text-2xl max-md:hidden">title of article</p>
      <Link className="text-2xl md:hidden" to={`/articles/${n}`}>
        title of article
      </Link>
      <ArticleMenu id={n}/>
      <p className="text-[#333] w-4/4 my-2 flex-auto overflow-y-auto">
        Here is will be the prewiev of the article Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Fuga repellendus quae, recusandae aliquid
        inventore sit maiores ut aliquam suscipit eligendi soluta enim beatae
        officiis obcaecati distinctio alias velit minus illum. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quae assumenda provident cum
        consectetur enim
      </p>
      <div className="flex items-end max-md:justify-between">
        <div className="flex items-end">
          <div className="h-8 w-8 border border-blue-500 rounded-full"></div>
          <p className="mx-2">Author name</p>
        </div>
        <p className="mx-2 ">May 11 ,2018</p>
      </div>
      <Link
        to={`/articles/${n}`}
        className="max-md:hidden p-1  bg-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-500/50 absolute right-3 bottom-3 text-white"
      >
        Read More
      </Link>
    </div>
  );
};

export default ArticleCard;

//react
import React, { useState } from 'react'
import { Link, useLocation} from 'react-router-dom'; 

//assets
  //icons
  import {AiOutlineLogin,AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  const location = useLocation();
  const [show_menu,setShowMenu] = useState(false); 

  const navbar_options = [
    {name:"Exercises",link_to:"/exercises"},
    {name:"Trainers",link_to:"/trainers"},
    {name:"Articles",link_to:"/articles"},
    {name:"Changes",link_to:"/changes"},
    {name:"Recipes",link_to:"/recipes"},
    {name:"Store",link_to:"/store"}];

  return (
    <nav 
      className= {` absolute top-0 w-screen flex justify-center pt-4 z-50 
      bg-black bg-opacity-80 py-2 border-b`}>
      
      <div 
        className=" navbar flex justify-between w-5/6">
        <div 
          className="left_navbar flex justify-start items-end w-3/5 md:w-4/5 lg:w-3/5 text-white ">

          <Link to="/"
            className=' text-white text-2xl logo pb-2' 
            >GymTeemLab
          </Link>

          <div 
            className="navbar_options flex justify-evenly w-full">
              {navbar_options.map((l) => (
                  <Link key={l.name}
                    to={l.link_to} 
                    className={`
                      pb-2 hidden 
                      md:block 
                      hover:text-blue-500  hover:-mt-1 
                      ${l.link_to === location.pathname && "text-blue-500"}` || l.style }
                    >{l.name}
                  </Link>
                ))}
          </div>
        </div>

        <div 
          className="right_navbar text-white flex items-end">
            <div 
              className="hidden md:flex items-center bg-blue-500 hover:bg-blue-400 shadow-lg shadow-blue-500/50 px-1 rounded-md">
              <Link to="/login" 
                className='my-2 '
                >Login
              </Link>
              <AiOutlineLogin 
                className="mx-1 my-2"/>
            </div>

          <button 
            className="md:hidden flex items-center h-full"
            onClick={()=>setShowMenu(!show_menu)}>

            <AiOutlineMenu 
              className={`text-2xl hover:text-blue-500 ${show_menu && "text-blue-500"}`} />
          </button>
        </div>

        {show_menu && <div 
          className={`absolute top-0 right-0 md:hidden
            w-screen mt-16 
            flex flex-wrap
            `}>

          {navbar_options.map((l) => (
            <Link key={l.name}
              onClick={()=>setShowMenu(!show_menu)}
              to={l.link_to} 
              className={`w-full py-1 border-b
                  text-center text-lg
                  bg-black bg-opacity-80
                ${l.link_to === location.pathname ? "text-blue-500" : "text-white"}
                ${location.pathname === "/login" && "backdrop-blur-lg"}
                 hover:text-blue-500` || l.style }
              >{l.name}
            </Link>
          ))}

            <Link to="/login" 
              className={`w-full py-1 border-b
              bg-black bg-opacity-80
                ${"/login" === location.pathname ? "text-blue-500" : "text-white"}
              hover:text-blue-500
                flex justify-center items-center
                text-center text-lg` || l.style }
              onClick={()=>setShowMenu(!show_menu)}
              >Login 
              <AiOutlineLogin 
                className=""/>
            </Link>
            
          </div>}

      </div>
    </nav>
  )
}

export default NavBar

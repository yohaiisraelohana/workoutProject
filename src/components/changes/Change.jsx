import React from 'react'
import { Link } from 'react-router-dom'


const Change = ({title,style,kg,cir}) => {
  return (
    <Link to={`/change/1`} className={style}>
    <div className={style}>
        {title && <p className='text-2xl text-center mb-4 text-white'>{title}</p>}
        <div className="change grid grid-cols-2 h-full justify-center bg-white ">
          <div className="img_before h-full flex justify-center items-center border">
            before
          </div>
          <div className="img_after h-full flex justify-center items-center border">
            after
          </div>
        </div>
    </div>
    <div className="text-center border grid grid-cols-2 bg-white mt-4">
            <div className="">
              <p>weight</p>
              <p>{kg}kg</p>
            </div>
            <div className="">
              <p>circumference</p>
              <p>{cir}cm</p>
            </div>
      </div>
    </Link>
  )
}

export default Change
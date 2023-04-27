import React,{ useState } from 'react'

//components imports
import TrainerDetailsChanges from './TrainerDetailsChanges';
import TrainerDetailsEscorts from './TrainerDetailsEscorts';
import TrainerDetailsGallery from './TrainerDetailsGallery';
import TrainerDetailsProfile from './TrainerDetailsProfile'

const TrainerDetails = () => {
  const [show_option,setShowOption] = useState("Changes");
  const options = ["Changes","Escorts","Gallery","Products"];
  const discount = true;
  return (
    <div className='w-screen flex flex-wrap justify-center bg-black bg-opacity-80 pt-[10vh]'>
      <TrainerDetailsProfile/>

      <div className="w-full overflow-y-auto text-center">
        {options.map((o,i)=>(
          <button key={i}
            className={`${show_option === o ? "bg-white text-[#333]" : "text-white" } p-2 border border-b-0 rounded-t-md`}
            onClick={() => {
              setShowOption(o)
            }}
            >{o}</button>
        ))}
      </div>
      <div className="w-[90vw] border-t-2 text-center">
        {show_option === "Changes" && <TrainerDetailsChanges/>}
        {show_option === "Escorts" && <TrainerDetailsEscorts/>}
        {show_option === "Gallery" && <TrainerDetailsGallery/>}
        {show_option === "Products" && 
        <div className='w-full flex flex-wrap'>
          {new Array(8).fill(0).map((e,i) => (
            <div className="w-1/2 sm:w-1/3 md:w-1/4 h-fit p-2 md:p-2 lg:p-8">
              <div className="bg-white w-full flex flex-wrap p-2 content-start justify-center relative">
                <img className=""
                  src='https://www.pharmstore.co.il/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/l/alfawhey_blond_27_9.jpg'
                  alt='image of product'/>
                <p className=' w-full text-start  text-xl'>Title</p>
                {discount ? <p className=' w-full text-start'> <span className=' line-through mr-3' >300$</span><span className=' text-green-600 font-bold'>250$</span></p> : <p>300$</p> }
                <em className='text-start'>short desctiption about the product </em>
                <div className=" absolute h-8 w-8 sm:h-12 sm:w-12 rounded-full border border-blue-500 right-2 top-2 flex justify-center items-center">
                  <p className=' max-sm:text-xs'>25%</p>
                </div>
              </div>
            </div>
          ))}
        </div> }
      </div>
    </div>
  )
}

export default TrainerDetails
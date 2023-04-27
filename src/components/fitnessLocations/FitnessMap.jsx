import axios from 'axios';
import React from 'react'
import { useEffect ,useState ,useRef } from 'react'

//! change to axios with calling async func



const FitnessMap = () => {
    const [locations,setLocations] = useState(null);
    const [location_result,setLocationResult] = useState(null);
    const [marker,setMarker] = useState("");
    const [center,setCenter] = useState("182022.35,573577.98");
    const searchRef = useRef();

    const getData = async () => {
      await axios.get('https://data.gov.il/api/3/action/datastore_search?resource_id=2304b5de-c720-4b5c-bbc7-4cbab85e0ae8&q=לכושר&limit=500')
        .then((response) => setLocations(response.data.result.records));
    }
    
    useEffect(()=>{
        getData();
    },[])

    const hundleSearch = () => {
      setLocationResult(locations.filter((l)=>l["רשות מקומית"].includes(searchRef.current.value)));
    }
  return (
  <div className='w-screen h-fit flex flex-wrap justify-center pb-20 max-md:pt-[10vh] pt-10 bg-black bg-opacity-80'>
      <p className="text-white text-3xl text-center w-full my-2">Gym Closed ? No Excuses !</p>
      <p className="text-white text-center w-full mb-2">find closes gym and open fitness parks</p>
      <div className="w-[93vw] md:w-[80vw] h-fit md:h-[80vh] flex max-md:flex-wrap justify-around py-[2vh] md:py-[5vh]">
        <div className=" w-full h-[30vh] md:w-[27vw] md:h-full">
          <input type="text"
            placeholder='Enter your city'
            className='w-full p-2 mb-2 rounded-md h-[5vh] outline-none text-center'
            ref={searchRef}
            onChange={()=> hundleSearch()}
            />
          <div className="w-full h-[23vh] md:h-[64vh] bg-white rounded-t-md overflow-y-auto ">
              {location_result && location_result.map((l,i)=>(
                <button key={i}
                  className="flex justify-between border w-full hover:bg-slate-100 p-2"
                  onClick={()=>{
                    setMarker(`&bs=SPORT%7C${l["ציר X"]},${l["ציר Y"]}`);
                  }}>

                  <div className="text-end">
                    <p className='text-start'>{l["פנוי לפעילות"]}</p>
                    <p className='text-start'>{l["שם המתקן"]}</p>
                  </div>
                  <div className="text-end">
                    <p className='text-end'>{l["סוג מתקן"]}</p>
                    <p className='text-end'>{l["רשות מקומית"]}</p>                             
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className="h-[40vh] w-full md:h-full md:w-[50vw] rounded-md border border-black">
          <iframe id='ifrMap' 
            width='100%' 
            height='100%'
            src={`https://www.govmap.gov.il/map.html?bb=1&zb=1&in=1&c=${center}&z=6&b=0&lay=SPORT${marker}`} > </iframe>
        </div>
      </div>    
  </div>
  )
}

export default FitnessMap

/*
*   כושר
* https://govmap.gov.il/?c=162695,604454&z=7&b=0&lay=SPORT&bs=SPORT%7C162695,604454
*/
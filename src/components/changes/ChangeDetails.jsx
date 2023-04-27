import React,{useContext} from 'react'
import Change from './Change'
import { ChangeContext } from '../../contexts/ChangeContext'



const ChangeDetails = () => {
  const change = useContext(ChangeContext);
  console.log(change);
  return (
    <div className='w-screen flex justify-center py-[10vh]'>
        <Change  style={"w-[80vw] h-[80vh] m-auto flex-shrink-0"} cir={change.cir} kg={change.kg}/>
    </div>
  )
}

export default ChangeDetails
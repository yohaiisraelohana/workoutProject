//react imports
import React,{useState,useRef,useEffect} from 'react'

//icons imports
import {MdOutlineCancel} from 'react-icons/md'
import {BsTrash,BsPencilSquare,BsPencilFill} from 'react-icons/bs';


const TableWithTotal = ({data_array,setDataArray,details_to_print,th_array,total,setTotal}) => {
    const [amont_input,setAmountInput] = useState(false);
    const edit_input_ref = useRef();

    
    const handleDelete = (id) =>{
        setDataArray(data_array.filter((d)=>d._id !== id))
    }


    const handleEdit = (id) =>{
        setTotal({
            protein:0,
            total_fat:0,
            carbohydrates:0,
            food_energy:0,
        });
        setDataArray(data_array.map((d)=>{
            if(d._id === id){
                const prewAmount = d.amount;
                return{
                    amount:edit_input_ref.current.value,
                    _id:d._id,
                    english_name:d.english_name,
                    protein: d.protein / prewAmount * edit_input_ref.current.value,
                    carbohydrates:d.carbohydrates / prewAmount * edit_input_ref.current.value,
                    total_fat:d.total_fat / prewAmount * edit_input_ref.current.value,
                    food_energy:d.food_energy / prewAmount * edit_input_ref.current.value
                }
            }
            return d; 
        }));
        setAmountInput(false);
    }

  return (
    <div className='w-full h-3/4'>    
        <div className="relative overflow-auto  shadow-md sm:rounded-lg h-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {th_array.map((t)=>(
                            <th scope="col" className="px-6 py-3" key={t}>
                                {t}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    
                {data_array.length > 0 && data_array.map((data)=>(
                    <tr className="bg-white border-b   hover:bg-gray-50 " key={data._id + Math.random(1,100)}>

                        {details_to_print.map((p,i)=>(
                            (i===0 ?
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap " key={p}>
                                    {data[p]}
                                </th>
                                :
                                <td className="px-6 py-4" key={p}>
                                    {data[p].toFixed(2)}
                                </td>)
                        ))}

                        <td className=" md:px-6 py-4 text-right">
                            {amont_input ? 
                            <div className=" flex max-md:flex-wrap gap-2">

                                <input type="text" 
                                    className='w-full md:w-2/4 border rounded-md p-1 outline-none text-black'
                                    placeholder='gram'
                                    pattern="[0-9]*"
                                    required={true}
                                    ref={edit_input_ref}/>

                                <button className='hover:text-yellow-600'
                                    onClick={()=>handleEdit(data._id)}><BsPencilFill/></button>
                                <button className='hover:text-red-600' 
                                    onClick={()=>setAmountInput(false)}><MdOutlineCancel/></button>
                            </div>
                            :
                            <div className='flex gap-1'>
                                <BsPencilSquare className='text-lg hover:text-yellow-600' onClick={()=>setAmountInput(true)} />
                                <BsTrash className='text-lg hover:text-red-600' onClick={()=>{handleDelete(data._id)}}/>
                            </div>
                            }
                        </td>
                    </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr className="font-semibold text-white bg-black ">
                        <th scope="row" className="px-6 py-3 text-base">Total</th>
                        {total.map((t)=>(
                            details_to_print.map((p,i)=>(
                                i > 0 &&
                                <td className="px-6 py-3" key={i}>{t[p].toFixed(2)}</td>
                            ))
                        ))}
                        <td className="px-6 py-4 text-right"></td>
                    </tr>
                </tfoot>
            </table>
        </div>

    </div>
  )
}

export default TableWithTotal
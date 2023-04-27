//react imports
import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

//icons imports
import {AiOutlineMail,AiOutlineUser,AiOutlineLock,AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'


const SignUp = () => {
    const {register,formState:{errors},watch,handleSubmit} = useForm();
    const [show_pswrd,setShow_pswrd] = useState(false);




    //functions
    const signUp = (data) =>{
        console.log(data);
    }
    








  return (
    <div className="bg_signup_img bg-[url('./src/assets/signUpBackgraund.jpeg')] bg-no-repeat bg-cover h-screen w-screen flex justify-center items-center">
        <div className="signup bg-black bg-opacity-80 rounded-2xl  border border-white h-fit lg:w-1/3 xl:w-1/4 md:w-2/5 sm:w-3/5 w-4/5">
            <form className='grid justify-center relative' onSubmit={handleSubmit(signUp)}>
                <div className="text-center">
                    <p className='text-white mt-4'><span className="text-3xl">SignUp</span> | <Link to="/login">Login</Link></p>
                </div>

                <p className=" text-white mt-4">UserName</p>
                <div className="input">

                    <AiOutlineUser className=' absolute text-white right-8 md:right-20'/>

                    <input 
                        className=' border-b border-white p-1 bg-transparent outline-none text-white w-[30vh]'
                        type="text" 
                        {...register("username",{required:true})}/>

                </div>

                <p className="text-white mt-4">Email</p>
                <div className="input">

                    <AiOutlineMail className=' absolute text-white right-8 md:right-20' />

                    <input 
                        className=' border-b border-white p-1 bg-transparent outline-none text-white w-[30vh]'
                        type="email" 
                        {...register("email",{required:true})}/>

                    
                </div>
                
                

                <p className="text-white mt-4">Password</p>
                <div className="input">

                    <div className='absolute text-white right-8 md:right-20 flex'> 
                        {show_pswrd 
                            ? <AiOutlineEye onClick={()=>setShow_pswrd(!show_pswrd)}/>
                            : <AiOutlineEyeInvisible onClick={()=>setShow_pswrd(!show_pswrd)}/> }
                        <AiOutlineLock className='ml-1' />
                    </div>
                    
                    <input 
                        className=' border-b border-white p-1 bg-transparent outline-none text-white w-[30vh]'
                        type={show_pswrd ? 'text' : 'password'} 
                        {...register("password",{
                        required:{value:true,message:'this field is require'},
                        minLength:{value:8,message:'must contain minimum of 8 characters'},
                        maxLength:{value:20,message:'must contain maximum of 20 characters'},
                        },)} />
                </div>

                <button 
                    className='rounded-md bg-white m-auto my-10 p-2 border-none w-3/6'
                    type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp
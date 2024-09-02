import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [tasks, settasks] = useState([]);

  function registeruser(e)
  {
    e.preventDefault();
    settasks([...tasks,{name,pass,email}]);
               
    setname("");
    setpass("");
    setemail("");

    axios.post('/create',{name,pass,email});
  }

  return (
    <>
        <div className='login h-screen w-full bg-gray-200 flex justify-center place-items-center'>
            <div className='bg-white h-[60%] w-[30%] rounded-3xl flex flex-col place-items-center justify-center gap-10'>
                <h3 className=' text-3xl font-semibold'>Register / Sign Up </h3>

                <form className='flex flex-col justify-center place-items-center gap-5'onSubmit={registeruser}>

                    <input className='Name ' value={name} placeholder='Enter Your Name' 
                    onChange={(e)=>{
                        setname(e.target.value);
                    }} type='text' required/>

                    <input className='Email ' value={email} onChange={(e)=>{
                        setemail(e.target.value);
                    }} placeholder='Enter Your Email' type='email' required/>

                    <input className='Pass ' value={pass} onChange={(e)=>{
                        setpass(e.target.value);
                    }} placeholder='Enter Your Password' type='password' required/>
                    
                    <button type='submit' className='submit'>Register</button>

                </form>
                
                <Link to={'/login'} className=' text-sm text-gray-500'>Already Registered ? Sign In Here</Link>
            </div>
            
        </div>
    </>
  )
}
export default Register;
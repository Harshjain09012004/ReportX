import React, { useContext, useState } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import {usercontext} from './UserContext'

const Header = () => {
  const {user,ready,dp} = useContext(usercontext);
  const [pressedmenu, setpressedmenu] = useState(false);
  const [menuclass, setmenuclass] = useState('opacity-0')

  function menu(){
    setpressedmenu(!pressedmenu);
    if(menuclass) setmenuclass('');
    else setmenuclass('opacity-0')
  }

  return (
    <>
    <div className=' bg-white h-20 w-full flex  place-items-center px-[5%] justify-between shadow-md'>
        <Link to={'/'}>
            <div className='logo text-red-500 flex place-items-center gap-[2px] '>
                <Link to={'/'}>
                    <img src='src\assets\banner.png' className='w-48 h-20'/>
                </Link>
            </div>
        </Link>
        
        <div className='flex place-items-center gap-6'>
            <Link to={'/account/register'} className='w-36 h-12 text-center bg-black text-white p-2 border text-lg rounded-full hover:scale-110 transition-all'>Be Fearless</Link>

            <div className='relative flex place-items-center min-w-32 justify-evenly gap-6  rounded-full p-2 shadow-md shadow-slate-400 bg-white'>

                <div className={`absolute bg-zinc-200 top-[60px] w-48 max-h-40 text-md rounded-2xl transition-all z-10 shadow-md shadow-zinc-400 ${menuclass}`}>

                    {!user && (
                        <div className='flex flex-col gap-2 mt-4 mb-4'>
                            <Link className='text-center p-1 hover:bg-slate-400 transition-colors' to={'/login'}>Login Easily</Link>
                            <Link className='text-center p-1 hover:bg-slate-400 transition-colors'  to={'/register'}>Register Now</Link>
                        </div>
                    )}
                    
                    {user && ready && (
                        <div className='flex flex-col gap-2 mt-4 mb-4'>
                            <Link className='text-center p-1 hover:bg-slate-400 transition-colors' to={'/account/profile'}>Your Profile</Link>
                            <Link className='text-center p-1 hover:bg-slate-400 transition-colors'  to={'/account/complaints'}>Your Complaints</Link>
                            <Link className='text-center 
                            p-1 hover:bg-slate-400 transition-colors'  to={'/account/register'}>Register Complaint</Link>
                        </div>
                    )}

                </div>

                {!pressedmenu && <HiOutlineMenu className='text-2xl transition-all hover:scale-110 cursor-pointer' onClick={menu}/>}

                {pressedmenu && <RxCross1 className='text-2xl transition-all hover:scale-110 cursor-pointer' onClick={menu}/>}

                <Link className='flex place-items-center gap-2' to={user?'/account':'/login'}>
                    {dp && <img src={`http://localhost:5000/uploads/${dp}`} className=' h-[32px] w-[32px] rounded-full object-cover'/>}
                    {!dp && <MdAccountCircle className='text-3xl'/>}
                    <h1>{user}</h1>
                </Link>
                
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Header
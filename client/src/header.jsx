import React, { useContext } from 'react'
import { HiOutlineMenu } from "react-icons/hi";
import { MdAccountCircle } from "react-icons/md";
import { Link } from 'react-router-dom';
import {usercontext} from './UserContext'

const Header = () => {
  const {user} = useContext(usercontext);
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
            <p className=' text-xl font-semibold'>Be Fearless</p>
            <div className='flex place-items-center gap-3  rounded-full p-2 shadow-lg bg-white'>
                <HiOutlineMenu className='text-2xl'/>
                <Link to={user?'/account':'/login'}><MdAccountCircle className='text-3xl'/></Link>
                <h1>{user}</h1>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Header
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {usercontext} from './UserContext'
const Explore = () => {
  const {user} = useContext(usercontext);
  return (
    <div className='Explore flex justify-evenly gap-4 place-items-center m-16'>
        <Link to={user?'/account/register':'/login'} className='Button bg-black rounded-xl px-8 py-5 hover:scale-110 transition-transform'>
            <p className='text-white font-semibold text-lg'>Register Your Complaint</p>
        </Link>

        <Link to={user?'/account':'/login'} className='Button bg-black rounded-xl px-8 py-5 hover:scale-110 transition-transform'>
            <p className='text-white font-semibold text-lg'>Check Complain Status</p>
        </Link>
    </div>
    
  )
}

export default Explore
import React, { useContext, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { GrUserPolice } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";
import { BiPaste } from "react-icons/bi";
import Header from '../header';
import { usercontext } from '../UserContext';
import { Registercomplaints } from './registerComplaints';
import axios from 'axios';
import Allcomplaints from './allComplaints';

 const AccountPage = () => {
  const {user,ready,setuser} = useContext(usercontext);
  const [redirect, setredirect] = useState(null)
  const {subpage} = useParams();

  function linkclass(type=null){
    let classes = 'py-2 px-5 flex gap-4 items-center rounded-3xl';
    if(type === subpage) classes +=' bg-red-500  text-white';
    else classes+=' bg-gray-300'
    return classes;
  }

  async function logout(){
    try{
      const resp = await axios.post('/logout');
      if(resp.data.success)
      {
        setredirect('/')
        setuser('');
      }
    }
    catch{
       alert('Unable to process Request');
    }
  }
  if(ready && !user && !redirect) {return <Navigate to={'/login'}/>}
  if(redirect) {return <Navigate to={redirect}/>}

  return (
    <>
        <Header/>
        <nav className='flex gap-14 mt-7 mb-12 justify-center text-lg font-semibold'>
            <Link to={'/account/profile'} className={linkclass('profile')}>
              <LuUser2/>
              My Profile
            </Link>

            <Link to={'/account/complaints'} className={linkclass('complaints')}>
              <BiPaste/>
              My Complaints
            </Link>

            <Link to={'/account/register'} className={linkclass('register')}>
              <GrUserPolice />
              Register Complaint
            </Link>
        </nav>
        {subpage === 'profile' && (
          <div className='flex flex-col items-center gap-5'>
            <p className=' text-lg'>Logged in as {user}</p>
            <button className='py-3 px-8 bg-red-500 rounded-xl text-white text-large font-medium' onClick={logout}>Logout</button>
          </div>
        )}
        {subpage === 'register' && (
          <Registercomplaints/>
        )}

        {subpage === 'complaints' && (
          <Allcomplaints/>
        )}
        
    </>
  )
}
export default AccountPage;
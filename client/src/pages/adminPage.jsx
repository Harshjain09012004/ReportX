import React, { useContext, useEffect } from 'react';
import Header from '../header.jsx'
import { usercontext } from '../UserContext.jsx';
import { Navigate } from 'react-router-dom';
import Footer from '../footer';
import Subfooter from '../subfooter';
import { IoFilter } from "react-icons/io5";
import axios from 'axios';
import { AllComplaints } from '../allcomplaints.jsx';

function Admin() {
  const {isAdmin,ready} = useContext(usercontext);
  if(ready && !isAdmin) {return <Navigate to={'/'} />}
  
  return (
    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>

      <div className='w-28 p-2 px-3 m-3 mx-24 flex gap-4 rounded-full place-items-center border border-slate-100 shadow-slate-400 shadow-md hover:scale-110 transition-all cursor-pointer'>
        <p className='text-lg'>Filter</p>
        <IoFilter className='text-2xl'/>
      </div>

      <AllComplaints/>

      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Admin
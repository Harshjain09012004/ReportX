import React, { useContext, useState } from 'react';
import Header from '../header.jsx'
import { usercontext } from '../UserContext.jsx';
import { Navigate } from 'react-router-dom';
import Footer from '../footer';
import Subfooter from '../subfooter';
import { AllComplaints } from '../allcomplaints.jsx';
import { IoFilter } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FiDownload } from "react-icons/fi";
import { BsTable } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import StickyHeadTable from '../table.jsx';
import { Downloader } from '../downloader.jsx';

function Admin() {
  const {isAdmin,ready,user} = useContext(usercontext);
  const [search, setsearch] = useState('');
  const [table, settable] = useState(false);
  const [card, setcard] = useState(true);
  const [download, setdownload] = useState(false);
  const [menuVisibility, setmenuVisibility] = useState('hidden');

  function menuHandler(){
    if(menuVisibility) setmenuVisibility('');
    else setmenuVisibility('hidden');
  }

  function Apply(){
    return 0;
  }

  if(ready && (!user || !isAdmin)) {return <Navigate to={'/'}/>}

  return (

    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>

      <div className='AdminHeader mt-3 flex place-items-center justify-between sticky top-0 z-10 bg-zinc-50 h-24  bg-opacity-85'>

        <div className='w-28 p-2 px-3 m-3 mx-24 flex gap-4 rounded-full place-items-center border border-violet-100 bg-white shadow-slate-400 shadow-md hover:scale-105 transition-all cursor-pointer' onClick={menuHandler}>
          <p className='text-lg text-zinc-700'>Filter</p>
          <IoFilter className='text-2xl'/>
        </div>

        <div className={`MenuBar absolute top-24 left-24 p-3 w-72 flex flex-col place-items-center gap-6 pt-2 bg-white border border-gray-300 shadow-md shadow-zinc-400 rounded-2xl transition-all ${menuVisibility}`}>

          <div className='SortBy flex flex-col gap-2'>
            <p className='text-lg text-center font-semibold'>Sort By</p>

            <div className='flex flex-wrap gap-x-6 gap-y-2 justify-center'>
              <label className='flex gap-2'>
                <p>Name</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Age</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Title</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Date</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Time</p>
                <input type='checkbox'/>
              </label>
            </div>
          </div>

          <div className='SelectCategory flex flex-col gap-2'>
            <p className='text-lg text-center font-semibold'>Categories</p>

            <div className='flex flex-wrap gap-x-6 gap-y-2 justify-center'>
              <label className='flex gap-2'>
                <p>Theft</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Threat</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Hacking</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Violence</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Scam</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Bribery</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>HateSpeech</p>
                <input type='checkbox'/>
              </label>

              <label className='flex gap-2'>
                <p>Property</p>
                <input type='checkbox'/>
              </label>
            </div>
          </div>

          <div className='Apply h-11 w-28 flex place-items-center justify-center bg-black rounded-full text-white font-medium active:scale-105 transition-all cursor-pointer'>Apply</div>

        </div>

        <div className='flex gap-14 justify-center place-items-center text-lg font-semibold'>
            <div className={`py-2 px-5 flex gap-4 items-center rounded-3xl cursor-pointer transition-all hover:scale-105 ${card?'bg-zinc-900 text-white':'bg-gray-300'}`} onClick={()=>{
              setcard(true); setdownload(false); settable(false);
            }}>
                <FaAddressCard/>
                Card View
            </div>

            <div className={`py-2 px-5 flex gap-4 items-center rounded-3xl cursor-pointer transition-all hover:scale-105 ${table?'bg-zinc-900 text-white':'bg-gray-300'}`} onClick={()=>{
              setcard(false); setdownload(false); settable(true);
            }}>
                <BsTable/>
                Tabular View
            </div>

            <div className={`py-2 px-5 flex gap-4 items-center rounded-3xl cursor-pointer transition-all hover:scale-105 ${download?'bg-zinc-900 text-white':'bg-gray-300'}`} onClick={()=>{
              setcard(false); setdownload(true); settable(false);
            }}>
                <FiDownload />
                Complaint Data
            </div>
        </div>

        <div className='w-56 h-11 border border-x-red-200 border-y-blue-200  shadow-md shadow-slate-400 rounded-full flex place-items-center gap-2 mr-20 hover:scale-105 transition-all bg-white'>
          <input type='text' placeholder='Search Here' className='w-44 placeholder:text-gray-900 outline-none rounded-full h-9 bg-white px-5' value={search}  onChange={(e)=>{
              setsearch(e.target.value);
          }}/>
          <FiSearch className='text-2xl active:scale-110 transition-all cursor-pointer'/>
        </div>

      </div>

      {card && (<AllComplaints/>)}
      {table && (<StickyHeadTable/>)}
      {download && (<Downloader/>)}
      
      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Admin
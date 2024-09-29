import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AdminCard from './adminCard';
import { NoDataFound } from './noDataFound';

export const AllComplaints = ({det,setdet}) => {
  
  useEffect(() => {
    axios.get('/allComplaints').then((data,err)=>{
      setdet(data.data);
    });
  }, [])

  return (
    <div className='flex flex-col m-7'>
        {det.length>0 && (
          <div className='ml-16 bg-white w-44 text-center p-2 rounded-lg border border-gray-200 shadow-md shadow-gray-300'>{det.length} Complaints Fetched</div>
        )}
        
        {det.map((data,i)=>{
            return <AdminCard key={i} det={data}/>
        })}

        {det.length==0 && (
          <NoDataFound/>
        )}
        
    </div>
  )
}
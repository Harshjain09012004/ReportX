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
        
        {det.map((data,i)=>{
            return <AdminCard key={i} det={data}/>
        })}

        {det.length==0 && (
          <NoDataFound/>
        )}
        
    </div>
  )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from './card';

export const AllComplaints = () => {
  const [det, setdet] = useState([]);
  useEffect(() => {
    axios.get('/allComplaints').then((data,err)=>{setdet(data.data);});
  }, [])

  return (
    <div className='flex flex-col ml-7 mt-5'>
        {det.map((data,i)=>{
            return <Card key={i} det={data} />
        })}
    </div>
  )
}
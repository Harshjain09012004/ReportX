import React, { useEffect, useState } from 'react'
import Card from '../card';
import axios from 'axios'

const UserComplaints = () => {
  const [allcomplaints, setallcomplaints] = useState([]);
  useEffect(() => {
    axios.get('/userComplaints')
    .then((data)=>{
      let arr = data.data.complaints;
      setallcomplaints(arr);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])



  return (
    <div>
      {allcomplaints.length == 0 && (
        <div className='flex justify-center'>
          <div className='text-center text-3xl rounded-3xl shadow-md shadow-zinc-300 font-medium bg-slate-200 p-24 m-6'>
          No Complaints Found!
          </div>
        </div>
      )}
      {allcomplaints.length > 0 && (
        <div>
          {allcomplaints.map((data,i)=>{
            return <Card key={i} det={data}/>
          })}
        </div>
      )}
    </div>
  )
}

export default UserComplaints;
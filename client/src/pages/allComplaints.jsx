import React, { useEffect, useState } from 'react'
import Card from '../card';
import axios from 'axios'

const Allcomplaints = () => {
  const [allcomplaints, setallcomplaints] = useState([]);
  useEffect(() => {
    axios.get('/allcomplaints')
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
        <div>
          <h1 className=' text-center text-2xl font-medium'>
            No Complaints Found!
          </h1>
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

export default Allcomplaints
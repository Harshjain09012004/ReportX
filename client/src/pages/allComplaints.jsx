import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Allcomplaints = () => {
  const [allcomplaints, setallcomplaints] = useState([]);

  useEffect(() => {
    axios.get('/allcomplaints')
    .then((data)=>{
      setallcomplaints(data.data.complaints);
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
          <h1 className=' text-center text-2xl font-medium'>
            Hello complaints are ready!
          </h1>
        </div>
      )}
    </div>
  )
}

export default Allcomplaints
import React, { useEffect, useState } from 'react'
import Card from '../card';
import axios from 'axios'

const Allcomplaints = () => {
  const [allcomplaints, setallcomplaints] = useState([]);
  const [cardcomplaints, setcardcomplaints] = useState(false)
  useEffect(() => {
    axios.get('/allcomplaints')
    .then((data)=>{
      let arr = data.data.complaints;
      for(let i=0;i<arr.length;i++){
        setallcomplaints([...allcomplaints,<Card key={i} det={arr[i]}/>]);
      }
      setcardcomplaints(true);
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
      {(allcomplaints.length > 0 && cardcomplaints) && (
        <div>
          <h1 className=' text-center text-2xl font-medium'>
            {allcomplaints}
          </h1>
        </div>
      )}
    </div>
  )
}

export default Allcomplaints
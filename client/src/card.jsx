import React, { useEffect, useState } from 'react'

const Card = ({det}) => {

  const [statusClass, setstatusClass] = useState();

  useEffect(() => {
    if(det.status == 'Pending') setstatusClass('text-lg  font-medium' + ' text-orange-500');
    else if(det.status == 'Active') setstatusClass('text-lg  font-medium' + ' text-green-500');
    else setstatusClass('text-lg  font-medium' + ' text-orange-900');
  }, [])

  return (
    <>
        <div className='Card flex flex-row gap-16 place-items-center w-[75%] h-72 
        p-1 m-8 ml-16 border border-gray-300 rounded-2xl shadow-neutral-400 shadow-lg cursor-pointer transition-all hover:shadow-zinc-500 hover:shadow-md'>

          <div className='Image relative w-[20%] h-[80%] bg-gray-400 rounded-2xl ml-4'>
            <img src={`http://localhost:5000/uploads/${det.photos[0]}`} className='relative rounded-2xl h-[100%] w-[100%] object-cover'/>
          </div>

          <div className='Details flex flex-col gap-3'>
            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Complaint's Title - </p>
              <p className='text-lg text-slate-600 font-medium'>{det.title}</p>
            </div>

            <div className='title flex flex-row place-items-center gap-1'>
              <p className='text-lg font-bold'>Description - </p>
              <textarea className='text-lg text-slate-600 font-medium bg-zinc-50 resize-none p-1' rows={1} cols={70} value={det.description} readOnly/>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Place - </p>
              <p className='text-lg text-slate-600 font-medium'>{det.address}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Complaint Date - </p>
              <p className='text-lg text-slate-600 font-medium'>{det.date.slice(0,10)}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Current Status - </p>
              <p className={statusClass}>{det.status}</p>
            </div>

          </div>

        </div>
    </>
  )
}

export default Card
import React, { useEffect, useState } from 'react'

const AdminCard = ({det,long}) => {

  const [statusClass, setstatusClass] = useState();

  useEffect(() => {
    if(det.status == 'Pending') setstatusClass('text-lg  font-medium' + ' text-orange-500');
    else if(det.status == 'Active') setstatusClass('text-lg  font-medium' + ' text-green-500');
    else setstatusClass('text-lg  font-medium' + ' text-orange-900');
  }, [])

  return (
    <>
        <div className='Card flex flex-row gap-16 place-items-center w-[80%] h-96 
        p-1 m-8 ml-16 border border-gray-300 rounded-2xl shadow-neutral-400 shadow-lg cursor-pointer transition-all hover:shadow-zinc-500 hover:shadow-md'>

          <div className='Image relative w-[25%] h-[80%] bg-gray-400 rounded-2xl ml-4'>
            <img src={`http://localhost:5000/uploads/${det.photos[0]}`} className='relative rounded-2xl h-[100%] w-[100%] object-cover'/>
          </div>

          <div className='Details flex flex-col gap-4'>
            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Complaint's Title - </p>
              <p className='text-lg text-slate-600 font-medium'>{det.title}</p>
            </div>

            <div className='flex gap-10'>
                <div className='title flex flex-row gap-1'>
                <p className='text-lg font-bold'>Complainee Name - </p>
                <p className='text-lg text-slate-600 font-medium'>{det.name}</p>
                </div>

                <div className='title flex flex-row gap-1'>
                <p className='text-lg font-bold'>Age - </p>
                <p className='text-lg text-slate-600 font-medium'>{det.age}</p>
                </div>

                <div className='title flex flex-row gap-1'>
                <p className='text-lg font-bold'>Gender - </p>
                <p className='text-lg text-slate-600 font-medium'>{det.gender}</p>
                </div>
            </div>

            <div className='title flex flex-row place-items-center gap-1'>
              <p className='text-lg font-bold'>Description - </p>
              <textarea className='text-lg text-slate-600 font-medium bg-zinc-50 resize-none p-1' rows={1} cols={70} value={det.description} readOnly/>
            </div>

            <div className='title flex flex-row place-items-center gap-1'>
                <p className='text-lg font-bold'>Extra Info - </p>
                <textarea className='text-lg text-slate-600 font-medium bg-zinc-50 resize-none p-1' rows={1} cols={70} value={det.extraInfo} readOnly/>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Location Of Incident - </p>
              <p className='text-lg text-slate-600 font-medium'>{det.address}</p>
            </div>

            <div className='flex gap-16'>
              <div className='title flex flex-row gap-1'>
                <p className='text-lg font-bold'>Complaint Date - </p>
                <p className='text-lg text-slate-600 font-medium'>{det.date.slice(0,10)}</p>
              </div>

              <div className='title flex flex-row gap-1'>
                <p className='text-lg font-bold'>Time Of Incident - </p>
                <p className='text-lg text-slate-600 font-medium'>{det.startTime}</p>
              </div>
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

export default AdminCard
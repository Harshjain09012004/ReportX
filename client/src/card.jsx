import React from 'react'

const Card = ({det}) => {
  return (
    <>
        <div className='Card flex flex-row gap-16 place-items-center w-[75%] h-72 
        p-1 m-8 ml-16 border border-gray-300 rounded-2xl shadow-neutral-400 shadow-lg cursor-pointer'>

          <div className='Image relative w-[20%] h-[80%] bg-gray-400 rounded-2xl ml-4'>
            <img src={`http://localhost:5000/uploads/${det.photos[0]}`} className='relative rounded-2xl h-[100%] w-[100%] object-cover'/>
          </div>

          <div className='Details flex flex-col gap-3'>
            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Title - </p>
              <p className='text-lg font-normal'>{det.title}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Description - </p>
              <textarea className='text-lg bg-white resize-none p-1' rows={1} cols={80} value={det.description} readOnly/>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Place - </p>
              <p className='text-lg font-normal'>{det.address}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Date - </p>
              <p className='text-lg font-normal'>{det.date}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Status - </p>
              <p className='text-lg font-normal'>{det.status}</p>
            </div>
          </div>

        </div>
    </>
  )
}

export default Card
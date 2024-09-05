import React from 'react'

const Card = ({det}) => {
  return (
    <>
        <div className='Card flex flex-row gap-16 place-items-center w-[75%] h-72 
        p-1 ml-16 border border-gray-300 rounded-2xl shadow-lg cursor-pointer'>

          <div className='Image relative w-[20%] h-[80%] bg-gray-400 rounded-2xl ml-4'>
            <img width={300} className='relative rounded-2xl object-cover'/>
          </div>

          <div className='Details flex flex-col gap-3'>
            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Title - </p>
              <p className='text-lg font-normal'>{det.title}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Description - </p>
              <p className='text-lg font-normal'>{det.description}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Place - </p>
              <p className='text-lg font-normal'>{det.address}</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Date - </p>
              <p className='text-lg font-normal'>12/01/2024</p>
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
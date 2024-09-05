import React from 'react'

const Card = (props) => {
  return (
    <>
        <div className='Card flex flex-row gap-2 w-[90%] h-72 
        p-1 m-16 border border-gray-300 rounded-2xl shadow-lg cursor-pointer'>

          <div className='Image relative w-[17%] h-[80%] bg-gray-400 rounded-2xl mt-6 ml-4'>
            <img src={props.image} width={300} className='relative rounded-2xl object-cover'/>
          </div>

          <div className='Description w-28 flex flex-col justify-between'>
            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Title - </p>
              <p className='text-lg font-normal'>Hell</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Description - </p>
              <p className='text-lg font-normal'>Hell</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Place - </p>
              <p className='text-lg font-normal'>Hell</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Date - </p>
              <p className='text-lg font-normal'>Hell</p>
            </div>

            <div className='title flex flex-row gap-1'>
              <p className='text-lg font-bold'>Status - </p>
              <p className='text-lg font-normal'>Hell</p>
            </div>
          </div>

        </div>
    </>
  )
}

export default Card
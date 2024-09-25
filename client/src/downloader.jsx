import React from 'react'

const Downloader = () => {
  return (
    <div className='Download flex justify-evenly gap-4 place-items-center m-16'>
      <div className='Button bg-black rounded-2xl px-8 py-5 hover:scale-105 transition-transform cursor-pointer'>
        <p className='text-white font-semibold text-lg'>Download JSON File</p>
      </div>

      <div className='Button bg-black rounded-2xl px-8 py-5 hover:scale-105 transition-transform cursor-pointer'>
        <p className='text-white font-semibold text-lg'>Download CSV File</p>
      </div>
    </div>
  )
}
export default Downloader;
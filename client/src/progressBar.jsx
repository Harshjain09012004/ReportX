import React from 'react'

export const ProgressBar = ({progress,setprogress}) => {
  
  return (
    <div className='flex gap-3 justify-center place-items-center '>
        <div className='h-3 w-72 rounded-3xl bg-stone-200 transition-all overflow-hidden'>
            <div className={'h-[100%] bg-black rounded-3xl transition-all'} style={{width:`${progress}%`}}></div>
        </div>
        <p>{progress}%</p>
    </div>
  )
}

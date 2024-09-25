import React from 'react'

export const ProgressBar = ({percent,setpercent}) => {
  let timer = setInterval(()=>{
    if(percent<90) setpercent(percent+10);
    clearInterval(timer);
  },300);

  return (
    <div className='flex gap-2 justify-center place-items-center'>
        <div className='h-3 w-96 rounded-3xl bg-white'>
            <div className={`h-[100%] w-[${percent}%] bg-black rounded-3xl`}></div>
        </div>
        <p>{percent}%</p>
    </div>
  )
}

import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

const Card = (props) => {
  return (
    <>
        <div className='Card flex flex-col gap-2 w-76 h-72
        p-1 mb-3 border border-gray-300 rounded-2xl shadow-md cursor-pointer'>

          <div className='Image relative w-[100%] h-[70%] bg-gray-400 rounded-2xl'>
            <img src={props.image} width={300} className='relative rounded-2xl object-cover'/>
            <IoHeartOutline className=" absolute top-2 right-2 text-gray-700"/>
          </div>

          <div className='Description flex flex-col justify-between p-1'>
            <div className='Location flex justify-between place-items-center'>
              <p className='text-[14px] font-semibold' >{props.location}</p>
              <div className='Rating flex place-items-center gap-2'>
                <IoStar className="text-[14px]"/>
                <p className='text-[14px]'>{props.rating}</p>
              </div>
            </div>

            <div className='text-[14px] font-medium flex flex-col gap-1'>
              <p>{props.title}</p>
              <p><span className='Price font-extrabold'>${props.price}</span> Per Night</p>
            </div>
        
          </div>

        </div>
    </>
  )
}

export default Card
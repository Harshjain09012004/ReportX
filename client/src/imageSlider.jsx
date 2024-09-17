import React, { useState } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Slider = () => {
    const [loc, setloc] = useState(0);
    let imageArray = ['src/assets/Image1.avif','src/assets/Image7.jpg','src/assets/Image3.webp','src/assets/Image5.jpg','src/assets/Image2.jpg','src/assets/Image6.jpg','src/assets/Image4.jpg'];

    return (
        <div className='bg-zinc-100 p-4 border border-b-slate-300 mt-10'>
            <p className='text-2xl text-center font-semibold m-6'>Our Photo Gallery</p>

            <div className='flex justify-evenly place-items-center mb-10'>
                <IoArrowBackCircleOutline className='text-3xl active:scale-110 transition-all' onClick={()=>{
                    setloc((loc + 1)%7);
                }}/>
                
                <img src={imageArray[loc]} className='w-[750px] h-[460px] rounded-xl shadow-gray-500 shadow-lg transition-all object-cover'/>

                <IoArrowForwardCircleOutline className='text-3xl active:scale-110 transition-all' onClick={()=>{
                    setloc((loc - 1 + 7)%7);
                }}/>
            </div>
        </div>
    )
}

export default Slider;

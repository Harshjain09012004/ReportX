import React, { useState } from 'react'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const Slider = () => {
    const [loc, setloc] = useState(0);
    let imageArray = ['src/assets/MkGandhi.jpg','src/assets/Swami.jpg','src/assets/BhagatSingh.jpg'];

    return (
        <div className='bg-zinc-100 p-4 border border-slate-900 mt-10'>
            <p className='text-2xl text-center font-semibold m-6'>Our Photo Gallery</p>

            <div className='flex justify-evenly place-items-center'>
                <IoArrowBackCircleOutline className='text-3xl active:scale-110 transition-all' onClick={()=>{
                    setloc((loc + 1)%3);
                }}/>

                <img width={'230px'} src={imageArray[loc]} className='transition-all'/>

                <IoArrowForwardCircleOutline className='text-3xl active:scale-110 transition-all' onClick={()=>{
                    setloc((loc - 1 + 3)%3);
                }}/>
            </div>
        </div>
    )
}

export default Slider;

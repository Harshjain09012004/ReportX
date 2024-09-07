import React from 'react';
import { FaHeadphones } from "react-icons/fa6";
const HelpButton = ()=>{

    return (
        <div className='fixed right-6 bottom-16 bg-slate-300 w-16 h-16 rounded-full flex place-items-center justify-center shadow-md shadow-gray-500 hover:scale-105 hover:bg-zinc-200 transition-all'>
            <FaHeadphones className='text-2xl' />
        </div>
    )
}

export default HelpButton;
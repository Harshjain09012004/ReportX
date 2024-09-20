import React, { useState } from 'react';
import { FaHeadphones } from "react-icons/fa6";

const HelpButton = ()=>{
    let classA = 'opacity-0 right-4 bottom-24', classB = 'right-6 bottom-36';
    const [helpMenuCss, sethelpMenuCss] = useState(classA);
    
    function helpHandler(){
        if(helpMenuCss == classA) sethelpMenuCss(classB);
        else sethelpMenuCss(classA);
    }

    return (
        <div className='cursor-pointer' onClick={helpHandler}>
            <div className='fixed right-6 bottom-16 bg-zinc-300 w-16 h-16 rounded-full flex place-items-center justify-center shadow-md shadow-gray-500 active:scale-110 hover:bg-indigo-200 hover:scale-105 transition-all'>
                <FaHeadphones className='text-2xl' />
            </div>

            <div className={`bg-indigo-200 w-42 h-40 rounded-2xl fixed transition-all flex flex-col gap-2 place-items-start p-4 shadow-md shadow-slate-400 ${helpMenuCss}`}>
                <div className='flex gap-1'>
                    <p className='font-semibold'>Child :</p>
                    <p>110</p>
                </div>
                <div className='flex gap-1'>
                    <p className='font-semibold'>Women :</p>
                    <p>108</p>
                </div>
                <div className='flex gap-1'>
                    <p className='font-semibold'>General :</p>
                    <p>100</p>
                </div>
                <div className='flex gap-1'>
                    <p className='font-semibold'>Chat :</p>
                    <p>1234567890</p>
                </div>
            </div>
        </div>
        
    )
}

export default HelpButton;
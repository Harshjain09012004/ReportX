import React, { useState } from 'react';
import { FaHeadphones } from "react-icons/fa6";

const HelpButton = ()=>{
    const [helpMenuCss, sethelpMenuCss] = useState('bg-slate-400 w-36 h-40 rounded-2xl fixed right-6 bottom-36 transition-all opacity-0');

    function helpHandler(){
        if(helpMenuCss.indexOf('opacity-0')>0){
            sethelpMenuCss(helpMenuCss.replace('opacity-0','opacity-1'));
        }
        else{
            sethelpMenuCss(helpMenuCss.replace('opacity-1','opacity-0'));
        }
    }

    return (
        <>
            <div className='fixed right-6 bottom-16 bg-slate-300 w-16 h-16 rounded-full flex place-items-center justify-center shadow-md shadow-gray-500 hover:scale-105 hover:bg-zinc-200 transition-all cursor-pointer' onClick={helpHandler}>
                <FaHeadphones className='text-2xl' />
            </div>

            <div className={helpMenuCss}>
                
            </div>
        </>
        
    )
}

export default HelpButton;
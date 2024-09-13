import axios from 'axios';
import React,{useContext} from 'react';
import { usercontext } from '../UserContext';
import { FcCompactCamera } from "react-icons/fc";

const ProfilePage = (props)=>{
    const {user,setuser,dp,setdp} = useContext(usercontext);
    
    async function logout(){
        try{
            const resp = await axios.post('/logout');
            if(resp.data.success){
               setuser(''); setdp('');
               props.setredirect('/');
            }
        }
        catch{alert('Unable to process Request');}
    }

    function imagePicker(e){
        const files = e.target.files;
        const data = new FormData();
        for(let file of files) {data.append('photos',file)}

        axios.post('/uploadByButtonProfile',data,{
        headers:{'Content-Type':'multipart/form-data'}
        }).then((res)=>{
            setdp(res.data[0]);
        })
    }

    return (
        <div className='flex gap-10'>
            <div className=' w-72 h-[330px] ml-10 mt-10 p-5 gap-3 shadow-slate-300 shadow-xl rounded-2xl flex flex-col justify-center place-items-center border border-gray-200'>
                <div className='bg-gray-400 w-44 h-44 shadow-slate-700 shadow-md rounded-full mt-2 relative'>
                    <img src={`http://localhost:5000/uploads/${dp}`} className=' object-cover rounded-full h-44 w-44'/>

                    <label className='absolute right-1 bottom-0 active:scale-125 transition-all cursor-pointer'>
                        <input
                        type='file'
                        hidden
                        id="profileimagepicker"
                        onChange={imagePicker}
                        />
                        <FcCompactCamera className='text-3xl'/>
                    </label>
                </div>

                <p className='text-xl font-semibold'>{user}</p>
                <button className='py-3 px-8 bg-red-500 rounded-xl text-white text-large font-medium' onClick={logout}>Logout</button>
            </div>

            <div className='w-[72%] h-[330px] mt-10 p-5 shadow-slate-300 shadow-xl rounded-2xl border border-gray-200'>
                
            </div>
        </div>
    )
}
export default ProfilePage;
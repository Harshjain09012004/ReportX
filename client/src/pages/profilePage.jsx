import axios from 'axios';
import React,{useContext, useState} from 'react';
import { usercontext } from '../UserContext';

const ProfilePage = (props)=>{
    const {user,setuser} = useContext(usercontext);
    const [profile, setprofile] = useState('');

    async function logout(){
        try{
            const resp = await axios.post('/logout');
            if(resp.data.success){
                props.setredirect('/'); setuser('');
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
            setprofile(res.data[0]);
        })
    }

    return (
        <div className='flex gap-10'>
            <div className=' w-72 h-[330px] ml-10 mt-10 p-5 gap-3 shadow-slate-300 shadow-xl rounded-2xl flex flex-col justify-center place-items-center border border-gray-200'>
                <div className='bg-gray-400 w-44 h-44 shadow-slate-700 shadow-md rounded-full mt-2 overflow-hidden relative'>
                    <img src={`http://localhost:5000/uploads/${profile}`} className=' object-cover h-48 w-48'/>

                    <label className='w-3 h-3 bg-black rounded-full absolute right-10 bottom-6 active:scale-125 transition-all cursor-pointer'>
                        <input
                        type='file'
                        hidden
                        id="profileimagepicker"
                        onChange={imagePicker}
                        />
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
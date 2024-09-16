import axios from 'axios';
import React,{useContext, useEffect, useState} from 'react';
import { usercontext } from '../UserContext';
import { FcCompactCamera } from "react-icons/fc";

const ProfilePage = (props)=>{
    const {user,setuser,dp,setdp} = useContext(usercontext);
    const [compldet,setcompldet] = useState([]);

    useEffect(() => {
      return () => {
        axios.get('/allcomplaints').then(({data})=>{
            let total = data.complaints.length; 
            let pending = 0, active = 0, closed = 0;
             
            for(let ob of data.complaints){
                if(ob.status == 'Pending') pending++;
                else if(ob.status == 'Closed') closed++;
                else active++;
            }
            setcompldet([total,active,pending,closed])
        })
      }
    }, [])
    

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

            <div className='w-[72%] h-[330px] mt-10 p-10 shadow-slate-300 shadow-xl rounded-2xl border border-gray-200 grid grid-cols-2 text-[26px] font-bold text-center'>
                <p className='border border-slate-300 place-content-center rounded-3xl m-2 text-green-400'><p className=' inline text-zinc-600'>Total Complaints</p> {compldet[0]}</p>
                <p className='border border-slate-300 place-content-center text-green-400 rounded-3xl m-2'><p className=' inline text-zinc-600'>Active Complaints </p>{compldet[1]}</p>
                <p className='border border-slate-300 place-content-center text-rose-400 rounded-3xl m-2'><p className=' inline text-zinc-600'>Pending Complaints</p> {compldet[2]}</p>
                <p className='border border-slate-300 place-content-center text-rose-400 rounded-3xl m-2'><p className=' inline text-zinc-600'>Closed Complaints</p> {compldet[3]}</p>
            </div>
        </div>
    )
}
export default ProfilePage;
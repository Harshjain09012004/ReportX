import axios from 'axios';
import React,{useContext} from 'react';
import { usercontext } from '../UserContext';

const ProfilePage = (props)=>{
    const {user,setuser} = useContext(usercontext);
    async function logout(){
        try{
            const resp = await axios.post('/logout');
            if(resp.data.success){
                props.setredirect('/'); setuser('');
            }
        }
        catch{alert('Unable to process Request');}
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            <p className=' text-lg'>Logged in as {user}</p>
            <button className='py-3 px-8 bg-red-500 rounded-xl text-white text-large font-medium' onClick={logout}>Logout</button>
        </div>
    )
}
export default ProfilePage;
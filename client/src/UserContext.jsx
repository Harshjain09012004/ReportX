import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const usercontext = createContext({});

export function ContextProvider({children}){
    const [user, setuser] = useState(null)
    const [ready, setready] = useState(false)
    useEffect(()=>{
      axios.get('/profile').then((user)=>{
        setuser(user.data.name);
        setready(true);
      })
    },[])
    return(
        <usercontext.Provider value={{user,setuser,ready,setready}}>
          {children} 
        </usercontext.Provider>
    )
}
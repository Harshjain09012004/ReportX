import React, { useContext } from 'react';
import Header from '../header.jsx'
import { usercontext } from '../UserContext.jsx';
import { Navigate } from 'react-router-dom';
import Footer from '../footer';
import Subfooter from '../subfooter';
import Card from '../card'

function Admin() {
  const {isAdmin,ready} = useContext(usercontext);
  if(ready && !isAdmin) {return <Navigate to={'/'} />}

  return (
    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>
      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Admin
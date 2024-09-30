import React, { useContext, useState } from 'react'
import { usercontext } from '../UserContext';
import { Navigate } from 'react-router-dom';
import Header from '../header';

export const VisualisationPage = () => {
  const { ready,user,isAdmin } = useContext(usercontext);
  if(ready && !user) {return <Navigate to={'/'}/>}
  if(ready && user && !isAdmin) {return <Navigate to={'/'}/>}

  return (
    <div>
      <Header/>
    </div>
  )
}

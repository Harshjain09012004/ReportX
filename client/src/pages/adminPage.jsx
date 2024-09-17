import React from 'react';
import Header from '../header.jsx'
import Subheader from '../subheader.jsx'
import Explore from '../explorebutton.jsx'
import Subfooter from '../subfooter.jsx';
import Footer from '../footer.jsx'
function Admin() {
  return (
    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>
      <Subheader/>
      <Explore/>
      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Admin
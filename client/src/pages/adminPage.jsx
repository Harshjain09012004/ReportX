import React from 'react';
import Header from '../header.jsx'
import Subheader from '../subheader.jsx'
import Card from '../card.jsx'
import Explore from '../explorebutton.jsx'
import Subfooter from '../subfooter.jsx';
import Footer from '../footer.jsx'
function Admin() {
  return (
    <div className='h-[100%] w-[100%] bg-zinc-50'>
      <Header/>
      <Subheader/>
      <div className='Cards flex flex-wrap gap-12 py-4 px-[5%]'>
        <Card image={"xyz.jpg"} location={"India"} title={"Happy Stay"} price={1000} rating={"1.0"}/>
        <Card image={"xyz.jpg"} location={"UAE"} title={"Saudi Stay"} price={5000} rating={"1.0"}/>
      </div>
      <Explore/>
      <Subfooter/>
      <Footer/>
    </div>
  )
}

export default Admin
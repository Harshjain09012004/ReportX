import React, { useState } from 'react'
import axios from 'axios'

export const Downloader = () => {
  const [jsonUrl, setjsonUrl] = useState('');
  const [csvUrl, setcsvUrl] = useState('');

  async function downloadJSON(){
    // Since API By Default responds in JSON So We used and existing API rather than creating new one
    const {data} = await axios.get('/allComplaints');
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData],{type:'application/json'});

    setjsonUrl(window.URL.createObjectURL(blob));
    setTimeout(()=>{
      document.getElementById('jsonLink').click();
    },1000);
  }

  async function downloadCSV(){
    const response = await axios.get('/DownloadCSV',{responseType:'blob'});
    const blob = response.data;
    
    setcsvUrl(window.URL.createObjectURL(blob));
    setTimeout(()=>{
      console.log(csvUrl);
      document.getElementById('csvLink').click();
    },1000)
  }

  return (
    <div className='flex gap-24 justify-around m-24 h-96'>
      <div className='JSONDownloader'>
        <a href={jsonUrl} id='jsonLink' download={'Complaints_Data.json'} className='hidden'></a>

        <div className='Button bg-black rounded-2xl px-8 py-5 hover:scale-105 transition-transform cursor-pointer text-white font-semibold text-lg' onClick={downloadJSON}>Download JSON File</div>
      </div>

      <div className='CSVDownloader'>
        <a href={csvUrl} id='csvLink' download={'Complaints_Data.csv'} className='hidden'></a>

        <div className='Button bg-black rounded-2xl px-8 py-5 hover:scale-105 transition-transform cursor-pointer text-white font-semibold text-lg' onClick={downloadCSV}>Download CSV File</div>
      </div>
    </div>
  )
}

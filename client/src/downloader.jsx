import React, { useState } from 'react'
import axios from 'axios'
import { ProgressBar } from './progressBar';

export const Downloader = () => {
  const [jsonUrl, setjsonUrl] = useState('');
  const [csvUrl, setcsvUrl] = useState('');
  const [percent, setpercent] = useState(10);
  const [percent2, setpercent2] = useState(10);

  async function downloadJSON(){
    // Since API By Default responds in JSON So We used and existing API rather than creating new one
    const {data} = await axios.get('/allComplaints');
    const jsonData = JSON.stringify(data);
    const blob = new Blob([jsonData],{type:'application/json'});

    setpercent(90); setjsonUrl(window.URL.createObjectURL(blob));
    setTimeout(()=>{
      document.getElementById('jsonLink').click();
    },1000);
  }

  async function downloadCSV(){
    const response = await axios.get('/DownloadCSV',{responseType:'blob'});
    const blob = response.data;
    
    setpercent2(90); setcsvUrl(window.URL.createObjectURL(blob));
    setTimeout(()=>{
      console.log(csvUrl);
      document.getElementById('csvLink').click();
    },1000)
  }

  return (
    <div className='flex gap-24 justify-evenly place-items-center m-24 h-40'>
      <div className='JSONDownloader flex flex-col gap-16 justify-center place-items-center'>
        <a href={jsonUrl} id='jsonLink' download={'Complaints_Data.json'} className='hidden'></a>

        <ProgressBar percent={percent} setpercent={setpercent}/>
        <div className='Button bg-black rounded-3xl px-8 py-5 hover:scale-105 w-60 transition-transform cursor-pointer text-white font-semibold text-lg' onClick={downloadJSON}>Download JSON File</div>
      </div>

      <div className='CSVDownloader flex flex-col place-items-center gap-16'>
        <a href={csvUrl} id='csvLink' download={'Complaints_Data.csv'} className='hidden'></a>

        <ProgressBar percent={percent2} setpercent={setpercent2}/>
        <div className='Button bg-black rounded-3xl px-8 py-5 hover:scale-105 transition-transform cursor-pointer text-white font-semibold text-lg' onClick={downloadCSV}>Download CSV File</div>
      </div>
    </div>
  )
}

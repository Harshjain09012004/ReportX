import React, { useContext, useEffect, useState } from 'react'
import { usercontext } from '../UserContext';
import { Navigate } from 'react-router-dom';
import Header from '../header';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Plot from 'react-plotly.js';
import Footer from '../footer';
import axios from 'axios';

export const VisualisationPage = () => {
  const { ready,user,isAdmin } = useContext(usercontext);
  const [criteria, setcriteria] = useState('Monthly');

  const [details, setdetails] = useState([]);
  useEffect(()=>{
    axios.get('/allComplaints').then(({data})=>{
      setdetails(data);
    })
  },[]);

  function complaintByMonth(){
    let count = [0,0,0,0,0,0,0,0,0,0,0,0];
    for(let comp of details){
      let month = Number(comp.registrationDate.split('-')[1]);
      count[month]++;
    }
    return count;
  }

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'], // X-axis labels
    datasets: [
      {
        label: 'Number of Complaints',
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',  // Line color
        tension: 0.2,  // Curved line effect
        animation:{
          duration:3000,
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        beginAtZero: true,  // Ensure y-axis starts at 0
        title: {
          display: true,
          text: 'Number of Complaints',
        },
      },
    },
    animation: {
      duration: 3000,
      easing: 'easeOutElastic',  
      delay: 500,
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Complaints Over Time',
      },
    },
  };

  const data2 = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  };

  var data3 = [{
  values: [27, 11, 25, 8, 1, 3, 25],
  labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
  text: 'CO2',
  textposition: 'inside',
  domain: {column: 1},
  name: 'CO2 Emissions',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
  }];

  var layout = {
  title: 'Global Emissions 1990-2011',
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'CO2',
      x: 0.50,
      y: 0.5
    }
  ],
  height: 430,
  width: 520,
  showlegend: false,
  grid: {rows: 1, columns: 1}
  };
  
  const data4 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], // X-axis labels
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3], // Y-axis data
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(255, 206, 86, 0.6)', // Yellow
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(153, 102, 255, 0.6)', // Purple
          'rgba(255, 159, 64, 0.6)', // Orange
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)', // Red
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(255, 206, 86, 1)', // Yellow
          'rgba(75, 192, 192, 1)', // Green
          'rgba(153, 102, 255, 1)', // Purple
          'rgba(255, 159, 64, 1)', // Orange
        ],
        borderWidth: 1, 
        borderRadius: 16, 
        barPercentage: 0.8, 
      },
    ],
  };

  // Chart options
  const options4 = {
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Number of Votes',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Colors',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Colorful Bar Chart Example',
        font: {
          size: 24,
        },
      },
    },
    animation: {
      duration: 2000, // Animation duration for the bars
      easing: 'easeInOutBounce', // Smooth animation effect
    },
    responsive: true,
  };
  
  if(details.length > 0){
    data.datasets[0].data = complaintByMonth();
  }

  if(ready && !user) {return <Navigate to={'/'}/>}
  if(ready && user && !isAdmin) {return <Navigate to={'/'}/>}

  if(ready && user && isAdmin){
    return (
    <div className='bg-zinc-50 '>
      <Header/>

      <div className='mt-16 flex flex-col gap-10 mb-16'>
        <div className='relative bg-white h-[600px] w-[1200px] ml-40 border shadow-lg shadow-gray-400 rounded-3xl flex justify-center p-2 hover:scale-105 cursor-pointer transition-all'>
          <Line data={data} options={options} />
          <label className='absolute top-3 right-3 hover:cursor-pointer flex place-items-center gap-4 border p-2 shadow-md rounded-xl'>
            <p className=' font-medium'>Criteria</p>
            <select className='p-1' onChange={(e)=>{
              setcriteria(e.target.value);
            }}>
              <option value={'Monthly'}>Monthly</option>
              <option value={'Yearly'}>Yearly</option>
              <option value={'Daily'}>Daily</option>
            </select>
          </label>
        </div>

        <div className='flex place-items-center'>
          <div className='bg-white h-[450px] w-[500px] border shadow-lg shadow-gray-400 rounded-3xl flex justify-center p-12 ml-40 hover:scale-105 cursor-pointer transition-all'>
            <Doughnut data={data2}/>
          </div>

          <div className='bg-white border shadow-lg shadow-gray-400 rounded-3xl flex justify-center ml-40 m-10 p-2 hover:scale-105 cursor-pointer transition-all'>
            <Plot data={data3} layout={layout} config={{ responsive: true }}/>
          </div>
        </div>

        <div className='bg-white h-[600px] w-[1200px] ml-40 border shadow-lg shadow-gray-400 rounded-3xl flex justify-center p-2 hover:scale-105 cursor-pointer transition-all'>
          <Bar data={data4} options={options4}/>
        </div>

      </div>
      
      <Footer/>
    </div>
    )
  }
}

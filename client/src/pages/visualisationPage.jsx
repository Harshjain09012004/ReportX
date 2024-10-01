import React, { useContext, useState } from 'react'
import { usercontext } from '../UserContext';
import { Navigate } from 'react-router-dom';
import Header from '../header';

import { Line } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { Chart as ChartJS } from 'chart.js/auto';

export const VisualisationPage = () => {
  const { ready,user,isAdmin } = useContext(usercontext);
  if(ready && !user) {return <Navigate to={'/'}/>}
  if(ready && user && !isAdmin) {return <Navigate to={'/'}/>}

  const data2 = [
    {
      x: ['Pending', 'Closed', 'Active'],  // X-axis categories
      y: [20, 45, 15],  // Y-axis values
      type: 'line',
      marker: { color: ['#FF6384', '#36A2EB', '#FFCE56'] },
      animation:{
        duration:3000,
      },
    },
  ];

  const layout = {
    title: 'Complaint Status Overview',
    animation:{
      duration:3000,
      delay:200,
      easing:'easeOutElastic',
    },
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
    datasets: [
      {
        label: 'Number of Complaints',
        data: [65, 59, 80, 81, 56, 55, 40], // Y-axis data
        fill: false,
        borderColor: 'rgba(75,192,192,1)',  // Line color
        tension: 0.1,  // Curved line effect
        animation:{
          duration:3000,
        },
      },
    ],
  };

  // Customize chart options
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

  return (
    <div>
      <Header/>
      <Line data={data} options={options} className='w-[900px] h-[40px]'/>
      <Plot data={data2} layout={layout}  config={{ responsive: true }} className='h-[550px] w-full'/>
    </div>
  )
}

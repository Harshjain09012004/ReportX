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
  const [details, setdetails] = useState([]);

  const [lineChartData, setLineChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Number of Complaints',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.2,
      },
    ],
  });
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

  const [doughnutChartData, setdoughnutChartData] = useState({
    labels: [
      'Male',
      'Female',
      'Others'
    ],
    datasets: [{
      label: 'Gender Comparison',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 18
    }]
  });
  const option2 = {
    title:{
      display:true,
      text:'Hell',
    },
  }

  const [doughnutChartData2, setdoughnutChartData2] = useState([{
    values: [35, 30, 34, 1],
    labels: ['Pending', 'Active', 'Closed', 'Terminated'],
    text: 'Status',
    textposition: 'inside',
    domain: {column: 1},
    name: 'Status',
    hoverinfo: 'label+percent+name',
    hole: .4,
    type: 'pie'
  }]);
  var layout = {
    title: 'Complaints Status Comparison',
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'Status',
        x: 0.50,
        y: 0.5
      }
    ],
    height: 430,
    width: 520,
    showlegend: true,
    grid: {rows: 1, columns: 1}
  };

  const [barChartData, setbarChartData] = useState({
    labels: ['Threat','Theft','Scam','Hate-Speech','Violence','Bribery','Account-Hacking','Property','Child-Marriage'], // X-axis labels
    datasets: [
      {
        label: 'Cases',
        data: [12, 19, 3, 5, 2, 3, 1, 5, 2], // Y-axis data
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
  });
  const options4 = {
    scales: {
      y: {
        beginAtZero: true, // Start y-axis at 0
        title: {
          display: true,
          text: 'Number of Cases',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Types Of Cases',
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
        text: 'Complaints Comparison By Case Types',
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

  useEffect(()=>{
    axios.get('/allComplaints').then(({data})=>{
      setdetails(data);
      setLineChartData({
        labels: labelByCriteria('Monthly'),
        datasets: [
          {
            label: 'Number of Complaints',
            data: complaintByCriteria('Monthly',data),
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
            tension: 0.2,
          },
        ],
      });

      setdoughnutChartData({
      labels: [
        'Male',
        'Female',
        'Others'
      ],
      datasets: [{
        label: 'Gender Comparison',
        data: genderCount(data),
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 18
      }]
      })

      setdoughnutChartData2([{
        values: StatusPecentage(data),
        labels: ['Pending', 'Active', 'Closed', 'Terminated'],
        text: 'Status',
        textposition: 'inside',
        domain: {column: 1},
        name: 'Status',
        hoverinfo: 'label+percent+name',
        hole: .4,
        type: 'pie'
      }]);

      setbarChartData({
        labels: ['Threat','Theft','Scam','Hate-Speech','Violence','Bribery','Account-Hacking','Property','Child-Marriage'], // X-axis labels
        datasets: [
          {
            label: 'Cases',
            data: CountCases(data), // Y-axis data
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
      })
    })

  },[]);

  function complaintByCriteria(Criteria,data){
    let complaint = (data ? data : details);
    if(Criteria == 'Monthly'){
      let count = [0,0,0,0,0,0,0,0,0,0,0,0];
      for(let comp of complaint){
        let month = Number(comp.registrationDate.split('-')[1]);
        count[month-1]++;
      }
      return count;
    }

    else if(Criteria == 'Daily'){
      let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
      for(let comp of complaint){
        let day = Number(comp.registrationDate.split('-')[2]);
        count[day-1]++;
      }
      return count;
    }

    else{
      let count = [0,0,0,0,0];
      for(let comp of complaint){
        let year = Number(comp.registrationDate.split('-')[0]);
        count[year - 2019 - 1]++;
      }
      return count;
    }
  }

  function labelByCriteria(Criteria){
    if(Criteria == 'Monthly'){
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
    }

    else if(Criteria == 'Daily'){
      return [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    }

    else{
      return [2020,2021,2022,2023,2024];
    }
  }

  function genderCount(data){
    let male = 0, female = 0, others = 0;
    for(let comp of data){
      if(comp.gender == 'Male') male++;
      else if(comp.gender == 'Female') female++;
      else others++;
    }
    return [male,female,others];
  }
  
  function StatusPecentage(data){
    let pending = 0, active = 0, closed = 0, terminated = 0;
    for(let comp of data){
      if(comp.status == 'Active') active++;
      else if(comp.status == 'Closed') closed++;
      else if(comp.status == 'Pending') pending++;
      else terminated++;
    }
    return [pending/(data.length),active/(data.length),closed/(data.length),terminated/data.length];
  }

  function CountCases(data){
    let threat = 0, theft = 0, scam = 0, hate = 0, bribe = 0;
    let violence = 0, child = 0, property = 0, account = 0;

    for(let comp of data){
      if(comp.tags.scam) scam++;
      else if(comp.tags.threat) threat++;
      else if(comp.tags.theft) theft++;
      else if(comp.tags.hateSpeech) hate++;
      else if(comp.tags.bribery) bribe++;
      else if(comp.tags.violence) violence++;
      else if(comp.tags.childMarriage) child++;
      else if(comp.tags.property) property++;
      else account++;
    }
    return [threat,theft,scam,hate,violence,bribe,account,property,child];
  }

  if(ready && !user) {return <Navigate to={'/'}/>}
  if(ready && user && !isAdmin) {return <Navigate to={'/'}/>}

  if(ready && user && isAdmin){
    return (
    <div className='bg-zinc-50 '>
      <Header/>

      <div className='mt-16 flex flex-col gap-10 mb-16'>
        <div className='relative bg-white h-[600px] w-[1200px] ml-40 border shadow-lg shadow-gray-400 rounded-3xl flex justify-center p-2 hover:scale-105 cursor-pointer transition-all'>
          <Line data={lineChartData} options={options} />

          <label className='absolute top-3 right-3 hover:cursor-pointer flex place-items-center gap-4 border p-2 shadow-md rounded-xl'>
            <p className=' font-medium'>Criteria</p>
            <select className='p-1 rounded-xl hover:cursor-pointer' onChange={(e) => {
                const selectedCriteria = e.target.value;
                setLineChartData({
                  labels: labelByCriteria(selectedCriteria),
                  datasets: [
                    {
                      label: 'Number of Complaints',
                      data: complaintByCriteria(selectedCriteria),
                      fill: false,
                      borderColor: 'rgba(75,192,192,1)',
                      tension: 0.2,
                    },
                  ],
                });
              }}>
              <option value={'Monthly'}>Monthly</option>
              <option value={'Yearly'}>Yearly</option>
              <option value={'Daily'}>Daily</option>
            </select>
          </label>
          
        </div>

        <div className='flex place-items-center'>
          <div className='relative bg-white h-[450px] w-[500px] border shadow-lg shadow-gray-400 rounded-3xl flex flex-col gap-5 justify-center place-items-center p-16 ml-40 hover:scale-105 cursor-pointer transition-all'>
            <p className='text-lg'>Complaints Count By Gender</p>
            <p className='absolute top-[55%] text-xl'>Gender</p>
            <Doughnut data={doughnutChartData} options={option2}/>
          </div>

          <div className='bg-white border shadow-lg shadow-gray-400 rounded-3xl flex justify-center ml-40 m-10 p-2 hover:scale-105 cursor-pointer transition-all'>
            <Plot data={doughnutChartData2} layout={layout} config={{ responsive: true }}/>
          </div>
        </div>

        <div className='bg-white h-[600px] w-[1200px] ml-40 border shadow-lg shadow-gray-400 rounded-3xl flex justify-center p-2 hover:scale-105 cursor-pointer transition-all'>
          <Bar data={barChartData} options={options4}/>
        </div>

      </div>
      
      <Footer/>
    </div>
    )
  }
}

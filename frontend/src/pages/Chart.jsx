import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import '../App.css'
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ChartPage = () => {
    const data = {
        labels: [
          'Cheif Executative',
          'Lead Manager',
          'General Manager',
          'Designing',
          'Coding',
          'Sales',
          'Finance'
        ],
        datasets: [{
          label: 'Food Industry',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Tech Industry',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };

      const data2 = {
        labels: [
          'Cheif Executative',
          'Lead Manager',
          'General Manager',
          'Designing',
          'Coding',
          'Sales',
          'Finance'
        ],
        datasets: [{
          label: 'Labour Industry',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Teaching',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className='chartBlock'>
        <div className="chartContainer" style={{ width: '300px', height: '300px' }}>
            <Radar className='chart' data={data} options={options}/>
            <Radar className='chart' data={data2} options={options}/>
            <Radar className='chart' data={data} options={options}/>
            <Radar className='chart' data={data2} options={options}/>
            <Radar className='chart' data={data} options={options}/>
            <Radar className='chart' data={data2} options={options}/>
            <Radar className='chart' data={data} options={options}/>
            <Radar className='chart' data={data2} options={options}/>
        </div>
        </div>
    );
};

export default ChartPage;

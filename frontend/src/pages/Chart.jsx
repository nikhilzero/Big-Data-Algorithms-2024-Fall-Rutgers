import React from 'react';
import { useLocation } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import '../App.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ChartPage = () => {
    const location = useLocation();
    const finalScores = location.state?.finalScores || new Array(22).fill(0); // Fallback to zeros if data is missing

    const data = {
        labels: [
            'Management occupations',
            'Business and financial operations occupations',
            'Computer and mathematical occupations',
            'Architecture and engineering occupations',
            'Life, physical, and social science occupations',
            'Community and social service occupations',
            'Legal occupations',
            'Educational instruction and library occupations',
            'Arts, design, entertainment, sports, and media occupations',
            'Healthcare practitioners and technical occupations',
            'Healthcare support occupations',
            'Protective service occupations',
            'Food preparation and serving related occupations',
            'Building and grounds cleaning and maintenance occupations',
            'Personal care and service occupations',
            'Sales and related occupations',
            'Office and administrative support occupations',
            'Farming, fishing, and forestry occupations',
            'Construction and extraction occupations',
            'Installation, maintenance, and repair occupations',
            'Production occupations',
            'Transportation and material moving occupations',
        ],
        datasets: [
            {
                label: 'Final Scores',
                data: finalScores,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
console.log("chart SCORE =>"+ finalScores);

    return (
        <div className="chartBlock">
            <div className="chartContainer" style={{ width: '80vw', height: '80vh' }}>
                <Radar className="chart" data={data} options={options} />
            </div>
        </div>
    );
};

export default ChartPage;

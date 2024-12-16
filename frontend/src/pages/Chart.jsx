import React from 'react';
import { useLocation } from 'react-router-dom';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import '../App.css';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const ChartPage = () => {
    const location = useLocation();
    const finalScores = location.state?.finalScores || new Array(22).fill(0); // Fallback to zeros if data is missing

    const edu_categories = location.state?.edu_categories || new Array(8).fill('No Data');
    const edu_values_2019_scaled = location.state?.edu_values_2019_scaled || new Array(8).fill(0);
    const edu_values_2023_scaled = location.state?.edu_values_2023_scaled || new Array(8).fill(0);
    console.log(edu_categories);console.log(edu_values_2019_scaled);console.log(edu_values_2023_scaled);
    // New variables
    const occ_title = location.state?.occ_title || new Array(9).fill('No Data');;
    const a_median_2019 = location.state?.a_median_2019 || new Array(9).fill(0);;
    const a_median_2023 = location.state?.a_median_2023 || new Array(9).fill(0);;
    
    console.log(occ_title);console.log(a_median_2019);console.log(a_median_2023);
    // Assuming these are 2D arrays and that skill_data is 3 sets of 16 skill values each
    const occupational_groups = location.state?.occupational_groups || ["Group 1", "Group 2", "Group 3"];
    const skill_data = location.state?.skill_data || [
      new Array(16).fill(0),
      new Array(16).fill(0),
      new Array(16).fill(0)
    ];
    console.log(occupational_groups);console.log(skill_data);


    const skills = {
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

    const education = {
        labels: edu_categories,
        datasets: [
            {
                label: 'Final Scores',
                data: edu_values_2019_scaled,
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)',
            },
            {
                label: 'Final Scores',
                data: edu_values_2023_scaled,
                fill: true,
                backgroundColor: 'rgba(8, 0, 225, 0.2)',
                borderColor: 'rgb(8, 0, 225)',
                pointBackgroundColor: 'rgb(8, 0, 225)',
                pointBorderColor: 'white',
                pointHoverBackgroundColor: 'blue',
                pointHoverBorderColor: 'rgb(8, 0, 225)',
            },
            
        ],
    };
const occupationsData = {
      labels: occ_title,
      datasets: [
        {
          label: '2019 Median Salary',
          data: a_median_2019,
          fill: true,
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderColor: 'rgb(255, 206, 86)',
          pointBackgroundColor: 'rgb(255, 206, 86)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 206, 86)',
        },
        {
          label: '2023 Median Salary',
          data: a_median_2023,
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)',
        }
      ]
    };
    const skillLabels = location.state?.skill_column || Array.from({ length: 16 }, (_, i) => `Skill ${i + 1}`);
    console.log(skillLabels);
    
    const skillDatasets = skill_data.map((row, index) => {
      const colors = [
        { bg: 'rgba(255, 99, 132, 0.2)', border: 'rgb(255, 99, 132)' },
        { bg: 'rgba(8, 0, 225, 0.2)', border: 'rgb(8, 0, 225)' },
        { bg: 'rgba(0, 200, 100, 0.2)', border: 'rgb(0, 200, 100)' },
      ];

      const color = colors[index] || colors[0];
      return {
        label: occupational_groups[index] || `Group ${index + 1}`,
        data: row,
        fill: true,
        backgroundColor: color.bg,
        borderColor: color.border,
        pointBackgroundColor: color.border,
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: color.border,
      };
    });

    const skillChartData = {
      labels: skillLabels,
      datasets: skillDatasets
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };
console.log("chart SCORE =>"+ finalScores);

    return (
        <div className="chartBlock">
            <div className="chartContainer" style={{width: '90vw', height: "90vh"}}>
                <Radar className="skills" style={{width: '80vw', height: "80vh"}} data={skills} options={options} />
                <Radar className="education" style={{width: '40vw', height: "40vh"}} data={education} options={options} />
                <Radar className="occupationsData" style={{width: '40vw', height: "40vh"}} data={occupationsData} options={options} />
                <Radar className="skillChartData" style={{width: '40vw', height: "40vh"}} data={skillChartData} options={options} />

            </div>
        </div>
    );
};

export default ChartPage;

import styles from './DonutChart.module.scss'
import React from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {

     const data = {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3],
                backgroundColor: [
                    'rgba(255, 149, 92, 0.7)',
                    'rgba(0, 144, 255, 0.7)',
                    'rgba(255, 219, 110, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        cutoutPercentage: 80,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        },
    };

    return (
        <>
            <div style={{height:'270px; margin:auto;'}}>
                <Doughnut data={data} options={options} />
            </div>
        </>
    );
 }
export default DonutChart
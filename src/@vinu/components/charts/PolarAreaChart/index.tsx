import styles from './PolarAreaChart.module.scss'
import React from 'react';

import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = () => {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                ],
                borderWidth: 1,
                borderColor: '#ffffff00', //border
                // backgroundColor: "#fff" //border
            },
        ],
    };
    const options = {
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        },
        scales: {
            r: {
                grid: {
                    color: '#33363D', // for the grid lines
                }
            }
        },
    };

    return (
        <>
            <PolarArea data={data} options={options} />
        </>
    );
 }
export default PolarAreaChart
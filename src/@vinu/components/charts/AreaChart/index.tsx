import styles from './AreaChart.module.scss'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);



const AreaChart = ({title,label,data1,data2}) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: title,
            },
        },
        scales: {
            y: {
                grid: {
                    color: '#33363D', // for the grid lines
                },
            },
            x: {
                grid: {
                    color: '#33363D', // for the grid lines
                },
            }
        },
    };

    const labels = label;

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Dataset 1',
                data: data1,
                borderColor: 'rgb(255, 149, 92)',
                backgroundColor: 'rgba(255, 149, 92, 0.2)',
                borderWidth:2
            },
            {
                fill: true,
                label: 'Dataset 2',
                data: data2,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.2)',
                borderWidth:2
            },
        ],
    };

    return (
        <>
            <Line options={options} data={data} />
        </>
    );
 }
export default AreaChart
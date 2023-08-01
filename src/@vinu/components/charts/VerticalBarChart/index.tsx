import styles from './AreaChart.module.scss'
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBarChart  = () => {


     const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            }
        },
         scales: {
             x: {
                 grid: {
                     display: false
                 }
             },
             y: {
                 grid: {
                     display: false
                 }
             },
             r: {
                 grid: {
                     display: false
                 }
             }
         },

         cutoutPercentage: 10,
         maintainAspectRatio: false
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: [31,42,35,34,41,27,11],
                backgroundColor: 'rgba(53, 162, 235, 1)',
                borderRadius:200,
                barThickness: 23,
                maxBarThickness: 30,
                barPercentage: 1,
                categoryPercentage: 2,
                order: 2,
            },
        ],
    };

    return (
        <>
            <div style={{height:'250px'}}>
                <Bar options={options} data={data}     />
            </div>
        </>
    );
 }
export default VerticalBarChart
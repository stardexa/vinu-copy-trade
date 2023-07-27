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
                position: 'top' as const,
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
             }
         }
    };
    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const labels = ['J', 'F', 'M', 'A', 'M', 'J', 'J'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 2',
                data: [31,42,35,34,41,27,11],
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderRadius:90,
            },
        ],
    };

    return (
        <>
            <div style={{height:'600px'}}>
                <Bar options={options} data={data}     />
            </div>
        </>
    );
 }
export default VerticalBarChart
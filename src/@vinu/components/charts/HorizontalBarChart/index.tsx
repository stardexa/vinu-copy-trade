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


const HorizontalBarChart  = () => {


    const options = {
        indexAxis: 'y' as const,
        responsive: true,
        cutoutPercentage: 90,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    color: '#292929', // for the grid lines
                },
            },
            y: {
                stacked: true,
                grid: {
                    display:false
                },
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [-11,-22,-35,-44,-31,-27,-17],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(0, 144, 255, 0.7)',
                borderRadius:90,
                barThickness: 14,
                maxBarThickness: 14,
                barPercentage: 1,
                categoryPercentage: 1,
                order: 2
            },
            {
                label: 'Dataset 2',
                data: [11,22,35,44,31,27,17],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor:  'rgba(255, 149, 92, 0.7)',
                borderRadius:90,
                barThickness: 14,
                maxBarThickness: 14,
                barPercentage: 1,
                categoryPercentage: 1,
                order: 2
            },
        ],
    };

    return (
        <>
            <div style={{width:'revert'}}>
                <Bar options={options} data={data} />
            </div>
        </>
    );
 }
export default HorizontalBarChart
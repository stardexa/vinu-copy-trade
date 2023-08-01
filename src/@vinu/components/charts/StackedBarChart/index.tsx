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

const StackedBarChart  = () => {

    const options = {
        plugins: {
            legend: {
                position: 'bottom' as const,
            }
        },
        responsive: true,
        cutoutPercentage: 90,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display:false
                },
            },
            y: {
                stacked: true,
                grid: {
                    color: '#33363D', // for the grid lines
                },
            },
        },

        maintainAspectRatio: false
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [31,42,35,34,41,27,37],
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
                data: [31,42,35,34,41,27,37],
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
            <div style={{height:'300px'}}>
                <Bar options={options} data={data} />
            </div>
        </>
    );
 }
export default StackedBarChart
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
        elements: {
            bar: {
                borderSkipped:"middle",
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [31,42,35,34,41,27,37],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: [31,42,35,34,41,27,37],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <>
            <div style={{height:'300px'}}>
                <Bar options={options} data={data} />;
            </div>
        </>
    );
 }
export default HorizontalBarChart
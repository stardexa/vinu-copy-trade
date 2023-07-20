import styles from './Statistics.module.scss'
import Image from "next/image";

import React from 'react';
import { Line } from 'react-chartjs-2';

const Statistics = ()=> {
    const data = {
        labels: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs'],
        datasets: [
            {
                label: 'Satışlar',
                data: [12, 19, 3, 5, 2],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };


    // new Chart(ctx, {
    //     type: 'bar',
    //     data: {
    //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //         datasets: [{
    //             label: '# of Votes',
    //             data: [12, 19, 3, 5, 2, 3],
    //             borderWidth: 1
    //         }]
    //     },
    //     options: {
    //         scales: {
    //             y: {
    //                 beginAtZero: true
    //             }
    //         }
    //     }
    // });
    //
    return (
        <>
            Statistics
            <div>
                <h2>Satışlar Grafiği</h2>
                <Line data={data} options={options} />
            </div>
        </>
    )
}
export default Statistics
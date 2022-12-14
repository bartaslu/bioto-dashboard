import React from 'react'
import { Bar } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const data = {
    labels:["January", "February", "March", "April", "May", "June", "July", "August"],
    datasets: [
        {
            data: [1,2,3,4,5,6,7,8],
        },
    ],
};



function BarCh() {
    return (
        <div>
          <h1>Bar Chart</h1>
          <div>
            <Bar data = {data}/>
          </div>
        </div>
    )
}

export default BarCh